import type { Config } from 'tailwindcss';

const config: Config = {
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
      screens: {
        xs: '500px',
      },
      colors: {
        'gray-border': '#2f3336',
        'primary-light': '#eff3f4',
        'primary-gray': '#71767B',
        'twitter-blue': {
          '50': '#f0f8ff',
          '100': '#e0effe',
          '200': '#bae0fd',
          '300': '#7ec7fb',
          '400': '#39abf7',
          '500': '#1d9bf0',
          '600': '#0372c6',
          '700': '#045ba0',
          '800': '#084e84',
          '900': '#0d416d',
          '950': '#082949',
        },
      },
      fontSize: {
        md: '15px'
      }
    },
  },
  plugins: [],
};
export default config;
