/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#5CA5A5",
        mainDark: "#2B3939",
        grey: "#7C8F8F",
        lineGrey: "#B7C4C4",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      width: {
        51: "51px",
        88: "88px",
        327: "327px",
        1110: "1110px",
      },
      height: {
        14: "14px",
        88: "88px",
        152: "152px",
        156: "156px",
        257: "257px",
      },
      borderRadius: { 5: "5px" },
      borderWidth: { 5: "5px" },
      fontSize: { 13: "13px", 15: "15px", 22: "22px" },
      lineHeight: { 14: "14px" },
      margin: { 7: "7px", 9: "9px", 15: "15px" },
    },
  },
  plugins: [],
};
