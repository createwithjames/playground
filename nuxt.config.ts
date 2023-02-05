// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      // Theme used in all color schemes.
      theme: "one-dark-pro",
    },
  },
});
