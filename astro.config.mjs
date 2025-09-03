import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
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
    react(),
    robotsTxt({
      sitemap: `${baseSite}/sitemap.xml`,
    }),
    keystatic(),
    playformCompress(),
  ],
  output: "hybrid",
  adapter: vercel({
    imageService: true,
  }),
});
