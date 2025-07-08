/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        pacifico: ['Pacifico', 'cursive']
      },
      colors: {
        blobBlue: '#BDE0FE',
        blobPurple: '#CDB4DB',
        blobPink: '#FFC8DD'
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        blob: 'blob 5s infinite ease-in-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        blob: {
          '0%, 100%': {
            borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%'
          },
          '50%': {
            borderRadius: '40% 60% 50% 50% / 50% 60% 40% 60%'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
