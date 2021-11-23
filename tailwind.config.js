module.exports = {
  mode: 'jit',
  purge: [
    './layout/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Public Sans"', 'sans-serif'],
      serif: ['"Ibarra Real Nova"', 'serif'],
    },
    fontSize: {
      xxs: '.625rem',
      xs: [
        '0.75rem',
        {
          letterSpacing: '0.125rem',
        },
      ],
      sm: [
        '0.9375rem',
        {
          lineHeight: '1.875rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.875rem',
        },
      ],
      md: [
        '2rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '0.018125rem',
        },
      ],
      lg: [
        '2.5rem',
        {
          lineHeight: '2.635rem',
          letterSpacing: '-0.0225rem',
        },
      ],
      xl: [
        '3.125rem',
        {
          lineHeight: '3.125rem',
          letterSpacing: '-0.028125rem',
        },
      ],
    },
    extend: {
      colors: {
        cyan: '#5FB4A2',
        'bright-red': '#F43030',
        'dark-blue': '#203A4C',
        'grayish-dark-blue': '#33323D',
        'light-grey': '#EAEAEB',
        'very-light-grey': '#FAFAFA',
      },
      gridTemplateColumns: {
        'home-hero-md': '75% 1fr',
        'home-hero': '40% 1fr',
      },
      gridTemplateRows: {
        detail: 'min-content min-content min-content',
        'home-hero': '1fr 60%',
        'home-hero-md': '1fr 46.5%',
        layout: 'min-content 1fr min-content',
      },
      outline: {
        cyan: '1px solid #5FB4A2',
        error: '1px solid #F43030',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
