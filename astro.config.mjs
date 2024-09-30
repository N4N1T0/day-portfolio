import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";

import playformCompress from "@playform/compress";

const baseSite = process.env.CI
  ? "https://www.dayanaabuinrios.marketing"
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site: baseSite,
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs(),
    robotsTxt({
      sitemap: `${baseSite}/sitemap.xml`,
    }),
    playformCompress(),
  ],
  output: "hybrid",
  adapter: vercel({
    imageService: true,
  }),
});
