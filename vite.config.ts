import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'


export default defineConfig({
  plugins: [
    vue(), 
    createHtmlPlugin({
      template: 'public/index.html',  // 手动指定html模板路径
    }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  server: {
    port: 9999,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
