/**
 * PostCSS configuration for IITH Yenagoa website
 *
 * Tailwind CLI uses PostCSS under the hood. This file is used when you run
 * PostCSS directly (e.g. postcss-cli, Vite, or webpack) or when Tailwind
 * discovers it automatically.
 *
 * Install peers (requires network):
 *   npm install -D tailwindcss postcss autoprefixer
 */
module.exports = {
  plugins: {
    // 1. Tailwind — generates utilities from content paths + theme
    tailwindcss: {},

    // 2. Autoprefixer — vendor prefixes based on browserslist
    autoprefixer: {},
  },
};
