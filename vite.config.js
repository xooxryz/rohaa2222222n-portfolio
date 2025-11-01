import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Set 'base' to your repo name if deploying to <username>.github.io/<repo>
// If deploying to <username>.github.io, set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/rohan-portfolio/', // TODO: change to your repo name
})
