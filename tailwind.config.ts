import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        "rock-salt": ["var(--font-rock-salt)"],
        "indie-flower": ["var(--font-indie-flower)"],
      },
    },
  },
  plugins: [],
};
export default config;
