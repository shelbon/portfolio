import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mouclepatrick.netlify.app',
  integrations: [mdx()],
});
