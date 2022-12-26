import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
export default defineConfig({
  publicDir: "public",
  server: { port: 3000 },
  plugins: [webfontDownload()],
});
