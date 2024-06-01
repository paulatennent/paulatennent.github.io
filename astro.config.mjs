import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://paulatennent.github.io',
  integrations: [tailwind()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
  },
});
