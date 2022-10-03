/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "#F5F5F5",
      },
      screens: {
        xxx: "1536px",
      },
      fontFamily: {
        gilroyBold: ["gilroy-bold", "sans-serif"],
        gilroyXlBold: ["gilroy-xl-bold", "sans-serif"],
        gilroyLight: ["gilroy-light", "sans-serif"],
        poppinsLight: ["poppins-light", "sans-serif"],
        poppinsMedium: ["poppins-medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
