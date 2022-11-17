import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import * as path from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

function generateScopedName(name: string, filename: string) {
  const [file] = path.basename(filename, '.css').split('.')

  return `${file}_${name}`
}

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      generateScopedName,
    },
  },

  plugins: [
    VueTypeImports(),

    Vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: 'src/quasar-variables.sass',
      autoImportComponentCase: 'pascal',
    }),
  ],
})
