// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const dev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
	site: "https://glennlewis.me",
	integrations: [mdx(), sitemap()],
	base: dev ? '/' : '/portfolio/',
});
