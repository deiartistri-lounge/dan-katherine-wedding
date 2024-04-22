/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      serif: ["ui-serif", "Georgia"],
      name: ["Courgette"],
      name2: ["Solway"],
      cursive: ['"Beau Rivage"'],
      roboto: ['"Roboto Slab"'],
      // passport: ['"Alegreya SC"'],
      passport: ['"Alegreya"'],
      cursive2: '"Euphoria Script"',
      kite: '"Kite One"',
    },
    extend: {
      backgroundImage: {
        glitter: "url('/assets/bg-blue-glitter.webp')",
        passport: "url('/assets/passport-stamp.jpg')",
        danrine1: "url('/assets/danrine-1.jpeg')",
        danrine2: "url('/assets/danrine-2.jpeg')",
        worldmap: "url('/assets/world-map.png')",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      colors: {
        primary: {
          50: "#e5f5ff",
          100: "#d0ecff",
          200: "#abdbff",
          300: "#79c0ff",
          400: "#4594ff",
          500: "#1c68ff",
          600: "#0047ff",
          700: "#004aff",
          800: "#0040dd",
          900: "#042fa2",
          950: "#031b63",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
