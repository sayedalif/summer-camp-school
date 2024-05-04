/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gototop: {
          '0%': { transform: 'translateY(-0.5rem)' },
          '100%': { transform: 'translateY(0.5rem)' },
        }
      },
      animation: {
        gototop: 'gototop 1.2s linear infinite alternate-reverse',
      }
    },
  },
  //...daisyui
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  },
}