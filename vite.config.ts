import { defineConfig } from 'vite'
import { fileURLToPath } from "url"
import path from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      // fireURLtoPath
      "@": fileURLToPath(new URL('./src', import.meta.url)),

      // use path
      "@components": path.resolve(__dirname, "src/components"),  
      "@pages": path.resolve(__dirname, "src/pages")
    }
  }
})
