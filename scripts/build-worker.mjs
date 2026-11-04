import { mkdir, readdir, rename, rm } from 'node:fs/promises'
import { build } from 'esbuild'

const outputRoot = new URL('../dist/', import.meta.url)
const clientRoot = new URL('../dist/client/', import.meta.url)
const serverRoot = new URL('../dist/server/', import.meta.url)

await rm(clientRoot, { recursive: true, force: true })
await rm(serverRoot, { recursive: true, force: true })
await mkdir(clientRoot, { recursive: true })

for (const entry of await readdir(outputRoot)) {
  if (entry === 'client' || entry === 'server') continue
  await rename(new URL(entry, outputRoot), new URL(entry, clientRoot))
}

await mkdir(serverRoot, { recursive: true })
await build({
  entryPoints: [new URL('../worker/index.js', import.meta.url).pathname],
  outfile: new URL('index.js', serverRoot).pathname,
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022'
})
