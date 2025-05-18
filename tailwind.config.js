// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["vazir", "sans-serif"], // must match the @font-face name
      },
    },
  },
  plugins: [],
};
