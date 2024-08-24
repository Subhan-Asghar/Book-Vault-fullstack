/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1C4532',
        },
        sapphire: {
          100: '#0F4C75', 
          200: '#3282B8',
        },
        platinum: {
          100: '#E5E5E5', 
          200: '#B0B0B0',
        },
        gold: {
          100: '#D4AF37',
          200: '#D4AF37', 
          300: '#B2983D',
        },
        offwhite: {
          100: '#FAF9F6',
        },
      },
    },
  },
  plugins: [],
};
