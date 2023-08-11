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
        "nss-misty-rose": "#fcdfddff",
        "nss-van-dyke": "#412c2bff",
        "nss-bittersweet": "#f96662ff",
        "nss-silver": "#cec8caff",
        "nss-azure-web": "#e3f6fcff",
        "nss-davys-gray": "#4a4754ff",
        "nss-white": "#fefefeff",
        "nss-moonstone": "#4ec0d1ff",
        "nss-alice-blue": "#e4f1fcff",
        "nss-snow": "#f5f1f4ff",
      },
    },
  },
  plugins: [],
};
