/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a1a2f',
        accent: '#7c3aed',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
