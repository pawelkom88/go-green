/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: ["./**/*.{html,js,jsx}"],
    // safelist: [],

    extend: {
      // colors: {},
    },
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
