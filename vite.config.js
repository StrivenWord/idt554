import { resolve } from 'path'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.njk.html'),
                about: resolve(__dirname, 'src/about.njk.html'),
                logseq: resolve(__dirname, 'src/logseq.njk.html'),
                obsidian: resolve(__dirname, 'src/obsidian.njk.html'),
                tiddlywiki: resolve(__dirname, 'src/tiddlywiki.njk.html')
            }
        }
    },
    server: {
        port: 8484,
        hot: true
    },
    plugins: [
        vituum(),
        nunjucks({
            root: resolve(__dirname, 'src')
        })
    ]
}
