module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        greenSplash: "url('@/assets/images/background-1@1x.png')",
        multiSplash: "url('@/assets/images/background-2@1x.png')",
      },
      dropShadow: {
        '3xl': '31.3727px 31.3727px 53.3336px rgba(10, 18, 51, 0.1)',
        '4xl': '20px 24px 44px rgba(20, 29, 67, 0.06)'
      },
      colors: {
        baseRed: '#F94E1E',
        baseYellow: '#FFC71E',
        baseGreen: '#0BB859',
        darkbaseGreen: '#007334',
        lightBlue: '#1A6AE3',
        baseBlue: '#317EF1',
        darkBlue: '#0A1233',
        baseGrey: '#80868b',
        darkGrey: '#585251',
        e4: '#e4e4e4',
        mainBackground: '#F9F9F9',
        white: '#fcfcfc',
        paper: '#F7F6F3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
