import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}", // sesuaikan path projek kamu
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};

export default config;
