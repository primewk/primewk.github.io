// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static", // 👈 required for static site generation
  vite: {
    plugins: [tailwindcss()],
  },
});
