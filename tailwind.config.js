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
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        start: "fadeIn 0.3s ease-in-out",
        end: "fadeOut 0.3s ease-in-out forwards",
      },
    },
  },
  content: [
    "./features/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
