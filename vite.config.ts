import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'node:path'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools(), createHtmlPlugin({}), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
