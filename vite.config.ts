import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/postcss'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import mdx from 'fumadocs-mdx/vite'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import tsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  resolve: {
    external: ['fumadocs-core'],
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    {
      ...babel({
        filter: /\.tsx?$/,
        babelConfig: {
          presets: ['@babel/preset-typescript'],
          plugins: ['babel-plugin-react-compiler'],
        },
      }),
      apply: 'build',
    },
    mdx(await import('./source.config')),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    react(),
  ],
})

export default config
