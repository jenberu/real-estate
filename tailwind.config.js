/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubic-Regular", "sans-serif"],
        "rubik-bold": ["Rubic-Bold", "sans-serif"],
        "rubic-extraBold": ["Rubic-ExtraBold", "sans-serif"],
        "rubic-medium": ["Rubic-Medium", "sans-serif"],
        "rubic-light": ["Rubic-Light", "sans-serif"],
      },
      colors: {
        primary: {
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191d31",
        },
        danger: "#F75555",
      },
    },
  },
  plugins: [],
};
