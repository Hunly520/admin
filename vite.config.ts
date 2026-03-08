import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { eslintPlugin } from 'vite-plugin-eslint' 
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(), 
    eslintPlugin({
      cache: false, // 禁用缓存，确保每次构建都进行 lint 检查
      include: ['src/**/*.js', 'src/**/*.vue'], // 指定要 lint 的文件类型
      exclude: ['node_modules'] // 排除 node_modules 目录
    }),
    createHtmlPlugin({
      template: 'public/index.html',  // 手动指定html模板路径
    })  
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
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
