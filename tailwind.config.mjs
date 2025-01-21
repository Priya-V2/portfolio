/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C2D57",
        secondary: "#EFECEC",
        highlight: "#FC6736",
        accent: "#FFB0B0",
      },
    },
  },
  plugins: [],
};
