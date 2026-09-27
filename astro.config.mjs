import { defineConfig } from 'astro/config';
import { sites } from '@openai/sites-vite-plugin';

export default defineConfig({
  output: 'static',
  outDir: './dist/client',
  vite: {
    plugins: [sites()],
  },
});
