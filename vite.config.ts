import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  publicDir: "public",
  server: { port: 3000 },
  plugins: [
    VitePWA({
      injectRegister: "auto",
      includeAssets: ["/favicon.ico", "/favicon.png"],
      manifest: {
        name: "Moheshwar Amarnath Biswas",
        short_name: "Moheshwar Amarnath Biswas",
        start_url: "./index.html",
        display: "standalone",
        description: "Website of Moheshwar Amarnath Biswas",
        lang: "en",
        dir: "auto",
        theme_color: "#29298b",
        background_color: "#202020",
        orientation: "any",
        icons: [
          {
            src: "./favicon512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "./favicon.png",
            sizes: "424x424",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "./favicon192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "./images/meta.png",
            sizes: "1148x679",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Home",
            url: "/",
            description: "The Home page",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
