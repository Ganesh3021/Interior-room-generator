/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './app/**/*.{js,ts,jsx,tsx}',
	  './components/**/*.{js,ts,jsx,tsx}',
	  './pages/**/*.{js,ts,jsx,tsx}', // optional, if using pages directory
	],
	theme: {
	  extend: {
		colors: {
		  border: 'hsl(240 5.9% 90%)',
		  input: 'hsl(240 5.9% 90%)',
		  ring: 'hsl(240 5.9% 90%)',
		  background: 'hsl(0 0% 100%)',
		  foreground: 'hsl(240 10% 3.9%)',
		  primary: {
			DEFAULT: 'hsl(240 5.9% 10%)',
			foreground: 'hsl(0 0% 100%)',
		  },
		  secondary: {
			DEFAULT: 'hsl(240 4.8% 95.9%)',
			foreground: 'hsl(240 5.9% 10%)',
		  },
		  destructive: {
			DEFAULT: 'hsl(0 84.2% 60.2%)',
			foreground: 'hsl(0 0% 98%)',
		  },
		  muted: {
			DEFAULT: 'hsl(240 4.8% 95.9%)',
			foreground: 'hsl(240 3.8% 46.1%)',
		  },
		  accent: {
			DEFAULT: 'hsl(240 4.8% 95.9%)',
			foreground: 'hsl(240 5.9% 10%)',
		  },
		},
		borderRadius: {
		  lg: '0.5rem',
		  md: '0.375rem',
		  sm: '0.25rem',
		},
		fontFamily: {
		  raleway: ['Raleway', 'sans-serif'],
		  calsans: ['"Cal Sans"', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  };
  