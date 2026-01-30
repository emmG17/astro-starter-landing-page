// @ts-check
import { defineConfig } from 'astro/config';

import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});