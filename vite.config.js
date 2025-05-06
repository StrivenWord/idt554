import { resolve } from 'path'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import liveReload from 'vite-plugins-live-reload'

export default defineConfig({
    root: resolve(__dirname, 'src'),
    base: './', // prevents broken CSS inclusion in published site
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: [
                resolve(__dirname, 'src/index.njk'),
                resolve(__dirname, 'src/about.njk'),
                resolve(__dirname, 'src/logseq.njk'),
                resolve(__dirname, 'src/obsidian.njk'),
                resolve(__dirname, 'src/tiddlywiki.njk')
            ]
        }
    },
    server: {
        port: 8484,
        hot: true
    },
    plugins: [
        vituum({
            pages: {
                extensions: ['njk']
            }
        }),
        nunjucks({
            root: resolve(__dirname, 'src'),
            options: {
                throwOnUndefined: false,
                watch: true,
                noCache: true
            }
        }),
        liveReload([
            'src/scss/styles.scss',
            'src/js/main.js'
        ])
    ]
})
