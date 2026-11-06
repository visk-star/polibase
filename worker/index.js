import { getNews } from '../server/newsFeed.js'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/news') {
      try {
        const articles = await getNews(url.searchParams.get('topic') || 'latest')
        return Response.json(
          { articles },
          { headers: { 'Cache-Control': 'public, max-age=600, stale-while-revalidate=86400' } }
        )
      } catch {
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
