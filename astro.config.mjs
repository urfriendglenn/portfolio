// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import mermaid from 'astro-mermaid';

const dev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
    site: "https://glennlewis.me",
    integrations: [mdx(), sitemap(), mermaid()],
    base: dev ? '/' : '/portfolio/',
});