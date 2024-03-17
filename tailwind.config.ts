import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff66c4",
      },
      fontFamily: {
        logo: ["var(--font-rock-salt)"],
        heroText: ["var(--font-bowlby-one-sc)"],
        sectionHeading: ["var(--font-rubik)"],
        text: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
};
export default config;
