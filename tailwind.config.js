/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./academics.html",
    "./admissions.html",
    "./contact.html",
    "./cves.html",
    "./news.html",
    "./sset.html",
    "./ssmtt.html",
    "./js/**/*.js",
    "./src/**/*.css",
  ],
  darkMode: "class",
  safelist: [
    "opacity-0",
    "opacity-100",
    "translate-y-0",
    "translate-y-6",
    "transition-all",
    "duration-700",
    "shadow-md",
    "hidden",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0,0,0,0.08)",
        card: "0 10px 40px -10px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
