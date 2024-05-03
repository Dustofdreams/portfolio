import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mainbg: "#222831",
      mainlighter: "#31363F",
      maingreen: "#76ABAE",
      maintext: "#EEEEEE"
    },
    fontSize: {
      "fluid-xl": "clamp(1.5rem, -1.893rem + 9.048vw, 4.600rem)",
      "fluid-lg": "clamp(1rem, 0.53rem + 2.091vw, 3.875rem)",
      "fluid-normal": "clamp(0.875rem, 0.814rem + 0.273vw, 1.25rem)",
      "fluid-logo": "clamp(0.875rem, 0.732rem + 0.636vw, 1.75rem)",
    }
  },
  plugins: [],
};
export default config;
