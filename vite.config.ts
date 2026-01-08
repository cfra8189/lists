import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Set base to the repository name for correct asset paths on GitHub Pages.
// Update this string if your repository name differs.
const base = '/list-lab/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
