import { getNews } from '../server/newsFeed.js'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/news') {
      const edgeCache = caches.default
      const freshKey = new Request(url.toString(), request)
      const backupUrl = new URL(url)
      backupUrl.pathname = '/api/news-backup'
      const backupKey = new Request(backupUrl.toString(), request)
      const freshResponse = await edgeCache.match(freshKey)
      if (freshResponse) return freshResponse

      try {
        const articles = await getNews(url.searchParams.get('topic') || 'latest')
        const response = Response.json(
          { articles },
          { headers: { 'Cache-Control': 'public, max-age=600' } }
        )
        const backupResponse = Response.json(
          { articles },
          { headers: { 'Cache-Control': 'public, max-age=86400' } }
        )
        await Promise.all([
          edgeCache.put(freshKey, response.clone()),
          edgeCache.put(backupKey, backupResponse)
        ])
        return response
      } catch {
        const backupResponse = await edgeCache.match(backupKey)
        if (backupResponse) return backupResponse
        return Response.json(
          { error: 'News is temporarily unavailable.' },
          { status: 502 }
        )
      }
    }

    const assetResponse = await env.ASSETS.fetch(request)
    if (assetResponse.status !== 404 || !request.headers.get('accept')?.includes('text/html')) {
      return assetResponse
    }

    return env.ASSETS.fetch(new Request(new URL('/index.html', request.url)))
  }
}
