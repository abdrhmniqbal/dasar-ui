import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/postcss'
import viteReact from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
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
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    viteReact(),
  ],
})

export default config
