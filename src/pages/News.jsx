import { useEffect, useMemo, useState } from 'react'
import { civicNewsTopics } from '../data/newsSources.js'

const REFRESH_INTERVAL = 10 * 60 * 1000

function buildNewsUrl(selectedTopic) {
  return `/api/news?topic=${selectedTopic?.id || 'latest'}`
}

function uniqueArticles(articles) {
  const seen = new Set()

  return articles.filter((article) => {
    const key = (article.url || article.title || '').toLowerCase().replace(/\/$/, '')
    if (!key || seen.has(key) || !article.title || !article.url) return false
    seen.add(key)
    return true
  })
}

async function fetchArticles(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('News request failed')

  const data = await response.json()
  const articles = Array.isArray(data.articles)
    ? data.articles.map((item) => ({
        title: item.title,
        url: item.url,
        seendate: item.publishedAt,
        domain: item.source
      }))
    : []

  return uniqueArticles(articles)
}

function formatDate(value) {
  if (!value) return ''

  const compactMatch = value.match(/^(\d{4})(\d{2})(\d{2})/)
  const normalizedValue = value.includes(' ') ? `${value.replace(' ', 'T')}Z` : value
  const date = compactMatch
    ? new Date(`${compactMatch[1]}-${compactMatch[2]}-${compactMatch[3]}T12:00:00`)
    : new Date(normalizedValue)

  if (Number.isNaN(date.getTime())) return ''

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

function getSourceLabel(article) {
  return article.sourceCountry || article.domain || article.sourceCommonName || 'News source'
}

export default function News({ text }) {
  const newsText = text.news
  const [articles, setArticles] = useState([])
  const [status, setStatus] = useState('loading')
  const [activeTopicId, setActiveTopicId] = useState('latest')
  const [requestKey, setRequestKey] = useState(0)
  const selectedTopic = useMemo(
    () => civicNewsTopics.find((topic) => topic.id === activeTopicId),
    [activeTopicId]
  )
  const newsUrl = useMemo(() => buildNewsUrl(selectedTopic), [selectedTopic])

  useEffect(() => {
    let ignore = false

    async function loadNews(showLoading = false) {
      try {
        if (showLoading) {
          setArticles([])
          setStatus('loading')
        }
        const liveArticles = await fetchArticles(newsUrl)

        if (!ignore) {
          setArticles(liveArticles)
          setStatus(liveArticles.length > 0 ? 'ready' : 'empty')
        }
      } catch {
        if (!ignore) {
          setArticles([])
          setStatus('error')
        }
      }
    }

    loadNews(true)
    const refreshTimer = window.setInterval(loadNews, REFRESH_INTERVAL)

    return () => {
      ignore = true
      window.clearInterval(refreshTimer)
    }
  }, [newsUrl, requestKey])

  const activeLabel = selectedTopic?.label || newsText.latest

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase text-civic-blue">{newsText.badge}</p>
        <h1 className="mt-3 text-4xl font-black text-civic-ink">{newsText.title}</h1>
        <p className="mt-4 leading-7 text-civic-muted">{newsText.intro}</p>
      </div>

      <div className="mt-8 rounded-xl border border-violet-100 bg-violet-50 p-4 text-sm leading-6 text-civic-muted">
        {newsText.disclaimer}
      </div>

      <div className="mt-8 border-b border-slate-200 pb-5">
        <p className="mb-3 text-xs font-black uppercase tracking-widest text-civic-muted">
          {newsText.exploreTopics}
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap" role="tablist" aria-label={newsText.exploreTopics}>
          <button
            type="button"
            role="tab"
            aria-selected={activeTopicId === 'latest'}
            onClick={() => setActiveTopicId('latest')}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
              activeTopicId === 'latest'
                ? 'border-civic-blue bg-civic-blue text-white shadow-sm'
                : 'border-slate-200 bg-white text-civic-muted hover:border-civic-blue hover:text-civic-blue'
            }`}
          >
            {newsText.latest}
          </button>
          {civicNewsTopics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              role="tab"
              aria-selected={activeTopicId === topic.id}
              onClick={() => setActiveTopicId(topic.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
                activeTopicId === topic.id
                  ? 'border-civic-blue bg-civic-blue text-white shadow-sm'
                  : 'border-slate-200 bg-white text-civic-muted hover:border-civic-blue hover:text-civic-blue'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </div>

      {status === 'loading' && (
        <p className="mt-8 rounded-xl border border-slate-200 bg-white p-5 font-semibold text-civic-muted shadow-soft">
          {newsText.loading}
        </p>
      )}

      {status === 'ready' && (
        <div className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-civic-blue">{newsText.liveFeed}</p>
              <h2 className="mt-1 text-2xl font-black text-civic-ink">{activeLabel}</h2>
            </div>
            <p className="text-sm font-semibold text-civic-muted">{newsText.refreshNote}</p>
          </div>
          <div className="divide-y divide-slate-200">
            {articles.map((article, index) => (
              <a
                key={`${article.url}-${article.seendate}`}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className={`group grid gap-3 py-6 transition hover:bg-white sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8 ${index === 0 ? 'pt-5' : ''}`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-civic-purple">
                    <span>{article.domain || getSourceLabel(article)}</span>
                    {article.seendate && <span className="text-civic-muted">{formatDate(article.seendate)}</span>}
                  </div>
                  <h3 className={`${index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'} mt-2 font-black leading-snug text-civic-ink transition group-hover:text-civic-blue`}>
                    {article.title}
                  </h3>
                </div>
                <p className="self-center text-sm font-bold text-civic-blue">{newsText.readMore} <span aria-hidden="true">→</span></p>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-civic-muted">
            {articles.length} {newsText.stories}
          </p>
        </div>
      )}

      {(status === 'empty' || status === 'error') && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-soft">
          <h2 className="text-2xl font-black text-civic-ink">{newsText.unavailableTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-civic-muted">
            {status === 'empty' ? newsText.noStories : newsText.unavailableText}
          </p>
          <button
            type="button"
            onClick={() => setRequestKey((key) => key + 1)}
            className="mt-5 rounded-full bg-civic-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            {newsText.tryAgain}
          </button>
        </div>
      )}
    </section>
  )
}
