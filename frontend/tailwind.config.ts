import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      C8E4FF: "#C8E4FF",
      "00669E": "#00669E",
      "01294A": "#01294A",
      white: "#FFFFFF",
      E7E7DC: "#E7E7DC",
      FFFFFFCC: "#FFFFFFCC",
      CFD8DC: "#CFD8DC",
      "455A64": "#455A64",
      "263238": "#263238",
      F2F4F5: "#F2F4F5",
      B0BEC5: "#B0BEC5",
      "607D8B": "#607D8B",
      "0053A6": "#0053A6",
      "12B669": "#12B669",
      "37474F": "#37474F",
      ECEFF1: "#ECEFF1",
      B23DEB: "#B23DEB",
      "039754": "#039754",
      FFD323: "#FFD323",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "why-choose-us-bg": "url('/images/why-choose-us-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
