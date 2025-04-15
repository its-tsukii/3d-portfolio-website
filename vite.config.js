import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CHANGE "your-repo-name" below to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/3d-portfolio-website/',
})
