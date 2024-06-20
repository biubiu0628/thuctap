/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pro: ["SF Pro Display Regular"],
        proMedium: ["SF Pro Display Medium"],
        proBold: ["SF Pro Display Bold"],
        mono: ["SF Mono Regular"],
        monoMedium: ["SF Mono Medium"],
        monoSemibold: ["SF Mono Semibold"],
        monoBold: ["SF Mono Bold"],
      },
    },
  },
  plugins: [],
};
