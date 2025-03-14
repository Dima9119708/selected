import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'node:path'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueDevTools from 'vite-plugin-vue-devtools'

import { iconsTypeGeneratorVitePlugin } from './plugins/icons-types-generator.ts'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools(), createHtmlPlugin({}), iconsTypeGeneratorVitePlugin(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
