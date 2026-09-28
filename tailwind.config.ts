import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1F3A2E",
        moss: "#2F5A45",
        marigold: "#F2A900",
        paper: "#FBFBF8",
        ink: "#18201C",
        chili: "#B3261E",
        mist: "#E6ECE8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
