// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  build: {
    transpile: ["vue-toastification", "pinia-plugin-persistedstate"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/main.scss" as *;',
        },
      },
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "App Data Stone",
      short_name: "App Data Stone",
      theme_color: "#1e3a8a",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      cleanupOutdatedCaches: false,
      clientsClaim: false,
      skipWaiting: true,
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
});
