import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import netlify from '@netlify/vite-plugin-tanstack-start'

const config = defineConfig({
  plugins: [
    // Disable source tracking to prevent conflicts with R3F
    devtools({ injectSource: { enabled: false } }),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart(),
    viteReact({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {}],
        ],
      },
    }),
    // No edge functions in this project; Netlify's emulator crashes on Deno 2.9
    // (`deno eval` rejects the `--allow-scripts` flag it passes).
    netlify({ dev: { edgeFunctions: { enabled: false } } }),
  ],
  build: {
    sourcemap: true,
  },
})

export default config
