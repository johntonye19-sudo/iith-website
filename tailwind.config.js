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
          50: "#f0f4f8",
          100: "#d9e2f0",
          200: "#b3c5e1",
          300: "#8ca8d2",
          400: "#668bc3",
          500: "#1e3a8a",
          600: "#1a3366",
          700: "#162854",
          800: "#0f1929",
          900: "#0a0f19",
          950: "#050a0f",
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
