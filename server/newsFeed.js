const CACHE_TTL = 10 * 60 * 1000
const localCache = new Map()

const feeds = [
  { source: 'NPR', url: 'https://feeds.npr.org/1014/rss.xml' },
  { source: 'PBS NewsHour', url: 'https://www.pbs.org/newshour/feeds/rss/politics' },
  { source: 'BBC News', url: 'https://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml' },
  { source: 'The Hill', url: 'https://thehill.com/feed/' }
]

const topicTerms = {
  immigration: ['immigration', 'immigrant', 'migrant', 'border', 'asylum', 'deport', 'ice '],
  tuition: ['tuition', 'college cost', 'higher education', 'university cost'],
  'student-loans': ['student loan', 'student debt', 'loan forgiveness', 'education debt'],
  healthcare: ['healthcare', 'health care', 'medicaid', 'medicare', 'health insurance', 'hospital'],
  housing: ['housing', 'rent ', 'rents ', 'mortgage', 'homeless'],
  climate: ['climate', 'emissions', 'environmental policy', 'clean energy', 'epa '],
  transportation: ['transportation', 'public transit', 'mass transit', 'railroad', 'rail ', 'highway', 'airline', 'airport', 'bridge funding', 'electric vehicle', 'amtrak', 'aviation', 'department of transportation'],
  elections: ['election', 'voter', 'voting', 'ballot', 'campaign', 'primary'],
  'supreme-court': ['supreme court', 'justices', 'scotus'],
  congress: ['congress', 'senate', 'senator', 'house ', 'lawmakers', 'capitol hill']
}

const topicQueries = {
  latest: 'U.S. politics Congress White House elections',
  immigration: 'U.S. immigration border policy',
  tuition: 'U.S. college tuition policy',
  'student-loans': 'U.S. student loans policy',
  healthcare: 'U.S. healthcare policy politics',
  housing: 'U.S. housing policy politics',
  climate: 'U.S. climate policy politics',
  transportation: 'U.S. transportation infrastructure transit policy',
  elections: 'U.S. elections politics',
  'supreme-court': 'U.S. Supreme Court',
  congress: 'U.S. Congress Senate House'
}

function decodeXml(value = '') {
  return value
    .replace(/^<!\[CDATA\[|\]\]>$/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return decodeXml(match?.[1] || '')
}

function directArticleUrl(value) {
  try {
    const url = new URL(value)
    return url.hostname.endsWith('bing.com') && url.searchParams.get('url')
      ? url.searchParams.get('url')
      : value
  } catch {
    return value
  }
}

function parseFeed(xml, source) {
  return [...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)]
    .map((match) => {
      const item = match[1]
      return {
        title: readTag(item, 'title'),
        url: directArticleUrl(readTag(item, 'link') || readTag(item, 'guid')),
        publishedAt: readTag(item, 'pubDate') || readTag(item, 'dc:date'),
        description: readTag(item, 'description'),
        source: readTag(item, 'News:Source') || source
      }
    })
    .filter((article) => article.title && article.url)
}

function uniqueArticles(articles) {
  const seen = new Set()
  return articles.filter((article) => {
    const key = `${article.title}|${article.url}`.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function filterByTopic(articles, topic) {
  if (topic === 'latest' || !topicTerms[topic]) return articles
  const terms = topicTerms[topic]
  return articles.filter((article) => {
    const searchable = `${article.title} ${article.description}`.toLowerCase()
    return terms.some((term) => searchable.includes(term))
  })
}

async function fetchFeed(feed) {
  const response = await fetch(feed.url, {
    headers: { 'User-Agent': 'PoliBase/1.0 civic-news-reader' },
    signal: AbortSignal.timeout(4000)
  })
  if (!response.ok) throw new Error(`${feed.source} returned ${response.status}`)
  return parseFeed(await response.text(), feed.source)
}

async function fetchTopicFeed(topic) {
  const url = new URL('https://www.bing.com/news/search')
  url.search = new URLSearchParams({
    q: topicQueries[topic] || topicQueries.latest,
    format: 'rss',
    setlang: 'en-US',
    count: '30'
  }).toString()

  return fetchFeed({ source: 'News source', url: url.toString() })
}

export async function getNews(topic = 'latest') {
  const safeTopic = topic === 'latest' || Object.hasOwn(topicTerms, topic) ? topic : 'latest'
  const cached = localCache.get(safeTopic)
  if (cached && Date.now() - cached.savedAt < CACHE_TTL) return cached.articles

  const results = await Promise.allSettled([
    ...feeds.map(fetchFeed),
    fetchTopicFeed(safeTopic)
  ])
  const combined = results.flatMap((result) => result.status === 'fulfilled' ? result.value : [])
  if (combined.length === 0) throw new Error('All news feeds failed')

  const articles = uniqueArticles(filterByTopic(combined, safeTopic))
    .sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0))
    .slice(0, 40)
    .map(({ description, ...article }) => article)

  localCache.set(safeTopic, { articles, savedAt: Date.now() })
  return articles
}

export async function newsMiddleware(req, res) {
  try {
    const requestUrl = new URL(req.url, 'http://localhost')
    const articles = await getNews(requestUrl.searchParams.get('topic') || 'latest')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'public, max-age=600, stale-while-revalidate=86400')
    res.end(JSON.stringify({ articles }))
  } catch {
    res.statusCode = 502
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify({ error: 'News is temporarily unavailable.' }))
  }
}
