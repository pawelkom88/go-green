/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    purge: ["./**/*.{html,js,jsx}"],
    safelist: ["primary-clr", "secondary-clr", "teriary-clr"],
    extend: {
      colors: {
        "primary-clr": "var(--primary-clr)",
        "secondary-clr": "var(--secondary-clr)",
        "teriary-clr": "var(--teriary-clr)",
      },
    },
  },
  content: [
    "./features/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
