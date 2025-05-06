import { defineConfig } from 'vite'
import { resolve } from 'path'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({
    root: 'src', // resolve(__dirname, 'src'),
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
    appType: 'mpa',
    server: {
        port: 8484,
        host: true,
        open: true,
        hot: true
    },
    plugins: [
        vituum({
            pages: {
                dir: '.',
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
