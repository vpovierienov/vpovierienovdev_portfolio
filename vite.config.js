import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/vpovierienovdev_portfolio/',
  plugins: [react()],
})


