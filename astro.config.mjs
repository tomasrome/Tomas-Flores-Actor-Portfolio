import { defineConfig } from "astro/config";
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tomasrome.github.io",
  base: "/Tomas-Flores-Actor-Portfolio",
  integrations: [sitemap()],
});
