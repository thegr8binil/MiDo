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
      colors :{
        primary: 'var(--primary-background-color)',
        secondary: 'var(--secondary-background-color)',
        textPrimary: 'var(--primary-text-color)',
        textSecondary: 'var(--secondary-text-color)',
        borderPrimary: 'var(--primary-border-color)',
        buttonSolidBg: 'var(--button-solid-background-color)',
        buttonSolidText: 'var(--button-solid-text-color)',
        buttonOutlinedBg: 'var(--button-outlined-background-color)',
        buttonOutlinedText: 'var(--button-outlined-text-color)',
      },
    },
  },
  plugins: [],
};
