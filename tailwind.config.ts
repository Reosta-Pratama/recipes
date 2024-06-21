import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancingScript': ['Dancing Script', 'cursive'],
        'ebGaramond': ['EB Garamond', 'serif']
      },
      colors: {
        'main': '#e35640',
        'lightHover': '#ee2852',
        'background': '#f9f6f6',
      },
      backgroundImage: {
        'pattern': "url('../../public/assets/img/pattern.png')",
      }
    },
  },
  plugins: [],
};
export default config;
