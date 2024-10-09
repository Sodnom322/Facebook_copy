/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#1877f2",
        "scroll-color": "#f1f1f1",
        "scroll-hover": "rgb(96 165 250)",
      },
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      width: {
        "70%": "70%",
      },
      maxHeight: {
        126: "32rem",
      },
      translate: {
        "custom-y": "25%", // добавляет кастомное значение для translate-x
        "custom-x": "35%%", // добавляет кастомное значение для translate-y
      },
    },
  },
  plugins: [],
};
