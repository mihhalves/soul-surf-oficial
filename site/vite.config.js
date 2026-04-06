import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function collectHtmlInputs(dir, baseDir = dir, inputs = {}) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // Skip build/dependency/static-source folders during entry discovery.
      if (entry.name === 'dist' || entry.name === 'node_modules' || entry.name === 'public' || entry.name === 'templates' || entry.name === 'pages') continue
      collectHtmlInputs(fullPath, baseDir, inputs)
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      const rel = path.relative(baseDir, fullPath)
      const name = rel.replace(/\.html$/, '')
      inputs[name] = fullPath
    }
  }

  return inputs
}

const htmlInputs = collectHtmlInputs(__dirname)

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: htmlInputs,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})