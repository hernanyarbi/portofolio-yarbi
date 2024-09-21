/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        blob: "48% 52% 67% 33% / 33% 39% 61% 67%",
      },
    },
  },
  plugins: [],
};
