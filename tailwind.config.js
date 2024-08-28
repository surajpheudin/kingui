/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        5: "5px",
        6: "6px",
      },
      colors: {
        focus: "var(--focus-color)",
        error: "var(--error-color)",
      },
      animation: {
        running: "runningKeyFrame 1s ease-in-out infinite",
      },
      keyframes: {
        runningKeyFrame: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};
