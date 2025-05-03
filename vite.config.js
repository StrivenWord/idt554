import { resolve } from 'path'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
    root: resolve(__dirname, 'src'),
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: [
                'index.njk.html',
            ]
        }
    },
    server: {
        port: 8484,
        hot: true
    },
    plugins: [
        vituum(),
        nunjucks()
    ]
}
