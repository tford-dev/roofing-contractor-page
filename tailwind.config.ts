import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e8eeff',
          200: '#cfdcff',
          300: '#abc2ff',
          400: '#7fa2ff',
          500: '#4f7eff',
          600: '#2e5ce3',
          700: '#2248b5',
          800: '#1f3f8f',
          900: '#1d376f'
        },
        slate: {
          950: '#0f1720'
        }
      },
      boxShadow: {
        premium: '0 20px 50px rgba(15, 23, 32, 0.18)'
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(105deg, rgba(15, 23, 32, 0.88) 35%, rgba(15, 23, 32, 0.58) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
