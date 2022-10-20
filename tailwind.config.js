module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#071f40",
        secondary: "#04325b",
        active: "#038587",
        button: "#015a95",
        light: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
