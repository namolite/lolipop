/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'ibm': ['IBMPlexMono'],
      'lato': ['Lato'],
      'pop': ['Poppins'],
      'tt': ['Montserrat']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      g: colors.neutral,
      gray: colors.gray,
      blue: colors.sky,
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
      ro: '0 0 100%'
    },
    minWidth: {
      '0': '0',
      '25p': '25%',
      '35p': '35%',
      '50p': '50%',
      '75p': '75%',
      'full': '100%',
     },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
