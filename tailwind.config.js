/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm': {'max': '896px'},
      'md': {'min': '897px'}
    },
    fontFamily: {
      'use': ["Arial", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif"]
    }
  },
  plugins: [],
}
