import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // string shorthand
      '/foo': 'http://localhost:4567',
      // with options
      '/api': {
        target: "https://xkcd.com/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
  },
},
  plugins: [vue()]
})
