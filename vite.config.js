import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { newsMiddleware } from './server/newsFeed.js'

function newsApi() {
  const attachMiddleware = (server) => {
    server.middlewares.use('/api/news', newsMiddleware)
  }

  return {
    name: 'polibase-news-api',
    configureServer: attachMiddleware,
    configurePreviewServer: attachMiddleware
  }
}

export default defineConfig({
  plugins: [react(), newsApi()]
})
