/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', "sans-serif"],
        heebo: ['heebo','sans-serif'],
        openSans: ['opensans' ,'sans-serif'],
        Raleway: ['Raleway','sans-serif']
               // Add more custom font families as needed
      },
      gem1: "'Gemini-f1'",
      gem2: "'Gemini-f2'",
      gem3: "'Gemini-f3'",
      gem4: "'Gemini-f4'",
      spacing: {
        'response-box-h': '27rem',
        'responsive-box-w': '40rem',
        'input-box-w': '52rem',
        'mobile-sidebar-height': "56rem",
        'mobile-main-height': "54rem",
      },

      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOUt: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out forwards',
        slideOut: 'slideOut 0.3s ease-out forwards',
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated')
		// ...
	],
}

