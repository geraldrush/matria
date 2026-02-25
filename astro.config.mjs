// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://matria.co.za",
  integrations: [],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
