/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#B23920",
        secondary: "#F7B754",
        tertiary: "#223c5f",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        menu: " linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)),  url('../IMG/menubanner.jpg')",
      },
    },
  },
  plugins: [],
};

