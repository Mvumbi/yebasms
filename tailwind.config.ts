import type { Config } from 'tailwindcss'
// ref check only

export default <Partial<Config>>{
  content: [
    './modules/**/*.vue',
    './shared/**/*.vue',
    './pages/**/*.vue',
    './layouts/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFCF7',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#0E2B1E',
          soft: '#4B5F55',
        },
        primary: {
          DEFAULT: '#0E9F6E',
          dark: '#076B47',
          light: '#D6F5E6',
        },
        accent: {
          DEFAULT: '#FF6B4A',
          dark: '#E5502F',
        },
        gold: '#FFB627',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"General Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
}
