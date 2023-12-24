/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('./assets/background.jpg')",
        "logo-bg": "url('./assets/logo.png')",
        "hero-pattern-2":
          "url('https://i.pinimg.com/564x/08/5f/3c/085f3c0b8e4ea5640c51a1c73ca879b0.jpg')",
        "hero-pattern":
          "url('https://i.pinimg.com/564x/85/a7/cb/85a7cb8c7dfda19128a376ea6a3a2337.jpg')",
      },
      animation: {
        "spin-slow": "spin 15s linear .1",
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      transitionDuration: {
        2000: "2000ms",
        infinite: "900000000000000000000ms",
      },
    },
  },
  plugins: [],
};
