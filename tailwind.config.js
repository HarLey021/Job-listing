/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        topBackground: "#5CA5A5",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      height: { 156: "156px" },
    },
  },
  plugins: [],
};
