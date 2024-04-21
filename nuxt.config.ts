// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: "static",
  $production: {
    router: {
      base: "/dan-katherine-wedding.github.io/", //eg:- /crstnmac.github.io/
    },
    app: {
      baseURL: "/dan-katherine-wedding.github.io/",
      buildAssetsDir: "assets",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@vueuse/motion/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Solway:wght@300;400;500;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Birthstone&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Alegreya+SC:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Euphoria Script",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kite+One&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Courgette&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "title",
          content: "RSVP | Dan Joseph & Katherine Wedding 2024",
        },
        {
          name: "description",
          content: "RSVP - Danrine 22 June 2024",
        },
        {
          name: "keywords",
          content: "Dan Joseph Salaya, Katherine Anuri, Danrine Nuptial",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        {
          name: "author",
          content: "BLUMENPRINTS | AIKOEDZ",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "white",
        },
      ],
    },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
