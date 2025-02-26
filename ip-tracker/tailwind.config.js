/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // Added ts and tsx for TypeScript support
  ],
  theme: {
    screens: {
	sm: '480px',
	md: '768px',
	lg: '976px',
	xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}
