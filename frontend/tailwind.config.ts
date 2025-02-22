import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './frontend/src/**/*.{js,ts,jsx,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;