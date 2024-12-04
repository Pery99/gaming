/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sanf-serif"],
        general: ["genera;", "sanf-serif"],
        "circular-web": ["circilar-web", "sanf-serif"],
        "robert-medium": ["robert-medium", "sanf-serif"],
        "robert-regular": ["robert-regular", "sanf-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFFO",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#101010",
          300: "#4FB7BD",
        },
        violet: {
          300: "#5724FF",
        },
        yellow: {
          100: "#8E983F",
          300: "#EDFF66",
        },
      },
    },
  },
  plugins: [],
};
