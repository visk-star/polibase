const CACHE_TTL = 10 * 60 * 1000
const cache = new Map()

const topicQueries = {
  latest: '(U.S. politics OR White House OR Congress OR Supreme Court OR elections) when:7d',
  immigration: 'immigration U.S. politics when:30d',
  tuition: 'college tuition policy U.S. when:30d',
  'student-loans': 'student loans policy U.S. when:30d',
  healthcare: 'healthcare policy U.S. politics when:30d',
  housing: 'housing policy U.S. politics when:30d',
  climate: 'climate policy U.S. politics when:30d',
  transportation: 'transportation policy U.S. politics when:30d',
  elections: 'U.S. elections politics when:30d',
  'supreme-court': 'Supreme Court U.S. when:30d',
  congress: 'U.S. Congress politics when:30d'
}

function decodeXml(value = '') {
  return value
    .replace(/^<!\[CDATA\[|\]\]>$/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i'))
  return decodeXml(match?.[1] || '')
}

function parseArticles(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .map((match) => {
      const item = match[1]
      const source = readTag(item, 'source') || 'News source'
      const rawTitle = readTag(item, 'title')
      const suffix = ` - ${source}`

      return {
        title: rawTitle.endsWith(suffix) ? rawTitle.slice(0, -suffix.length) : rawTitle,
        url: readTag(item, 'link'),
        publishedAt: readTag(item, 'pubDate'),
        source
      }
    })
    .filter((article) => article.title && article.url)
    .slice(0, 40)
}

export async function getNews(topic = 'latest') {
  const safeTopic = Object.hasOwn(topicQueries, topic) ? topic : 'latest'
  const cached = cache.get(safeTopic)

  if (cached && Date.now() - cached.savedAt < CACHE_TTL) return cached.articles

  const googleNewsUrl = new URL('https://news.google.com/rss/search')
  googleNewsUrl.search = new URLSearchParams({
    q: topicQueries[safeTopic],
    hl: 'en-US',
    gl: 'US',
    ceid: 'US:en'
  }).toString()

  const response = await fetch(googleNewsUrl, {
    headers: { 'User-Agent': 'PoliBase/1.0 civic-news-reader' }
  })
  if (!response.ok) throw new Error(`Google News returned ${response.status}`)

  const articles = parseArticles(await response.text())
  cache.set(safeTopic, { articles, savedAt: Date.now() })
  return articles
}

export async function newsMiddleware(req, res) {
  try {
    const requestUrl = new URL(req.url, 'http://localhost')
    const articles = await getNews(requestUrl.searchParams.get('topic') || 'latest')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=600')
    res.end(JSON.stringify({ articles }))
  } catch (error) {
    res.statusCode = 502
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify({ error: 'News is temporarily unavailable.' }))
  }
}
