// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static", // 👈 required for static site generation
  site: 'https://primewk.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
