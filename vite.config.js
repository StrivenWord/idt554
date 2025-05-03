import { resolve } from 'path'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
    root: resolve(__dirname, 'src'),
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
            // main: resolve(__dirname, 'src/index.njk'),
            // about: resolve(__dirname, 'src/about.njk'),
            // logseq: resolve(__dirname, 'src/logseq.njk'),
            // obsidian: resolve(__dirname, 'src/obsidian.njk'),
            // tiddlywiki: resolve(__dirname, 'src/tiddlywiki.njk')
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
        })
    ]
}
