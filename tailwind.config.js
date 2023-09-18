/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
          mistyrose: "#fcdfddff",
          vandyke: "#412c2bff",
          bittersweet: "#f96662ff",
          silver: "#cec8caff",
          azureweb: "#e3f6fcff",
          davysgray: "#685F78",
          white: "#fefefeff",
          moonstone: "#4ec0d1ff",
          aliceblue: "#e4f1fcff",
          snow: "#f5f1f4ff",
          ungu: "#2e1065",
      },
    },
  },
  plugins: [],
};
