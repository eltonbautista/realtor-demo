/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#1E3A8A", // navy
          light: "#3B82F6",   // lighter blue
          dark: "#1E40AF",   // darker shade
        },
        accent: {
          DEFAULT: "#F97316", // warm coral
          light: "#FDBA74",
          dark: "#C2410C",
        },
        neutral: {
          light: "#F9FAFB", // background
          dark: "#111827",  // text
        },
      },
    },
  },
  plugins: [],
};
