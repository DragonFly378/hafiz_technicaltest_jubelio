/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "biru-primary": "#68AFB9",
        "biru-secondary": "#49DDF1",
        "biru-tertiary": "#77D5E1",
        hitam: "#2A2A2A",
        merah: "#F14949",
        oren: "#F19A49",
        abu: "#DDDFDF",
      },
    },
  },
  plugins: [],
};
