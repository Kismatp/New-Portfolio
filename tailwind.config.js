/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        display: ['var(--font-display)'],
      },
      colors: {
        // Primary Accent - Sophisticated Amber/Gold
        accent: {
          50:  '#FDF8F0',
          100: '#F9EDD9',
          200: '#F2D9AE',
          300: '#E8C075',
          400: '#DCA24A',
          500: '#C8A85E',
          600: '#B0914D',
          700: '#8D733B',
          800: '#6B562E',
          900: '#554426',
          950: '#2E2413',
        },
        // Light mode neutrals (surface)
        surface: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Dark mode neutrals - proper dark values
        dark: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Semantic color aliases using CSS variables
        bg: 'var(--color-bg)',
        'bg-elevated': 'var(--color-bg-elevated)',
        'bg-muted': 'var(--color-bg-muted)',
        'bg-subtle': 'var(--color-bg-subtle)',
        fg: 'var(--color-fg)',
        'fg-muted': 'var(--color-fg-muted)',
        'fg-subtle': 'var(--color-fg-subtle)',
        'fg-disabled': 'var(--color-fg-disabled)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        'border-focus': 'var(--color-border-focus)',
      },
      fontSize: {
        // Fluid typography scale
        'display-xl': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-xl': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-lg': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.005em' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'label': ['0.625rem', { lineHeight: '1.5', letterSpacing: '0.15em', textTransform: 'uppercase' }],
      },
      spacing: {
        'space-xs': '0.25rem',   // 4px
        'space-sm': '0.5rem',    // 8px
        'space-md': '1rem',      // 16px
        'space-lg': '1.5rem',    // 24px
        'space-xl': '2rem',      // 32px
        'space-2xl': '3rem',     // 48px
        'space-3xl': '4rem',     // 64px
        'space-4xl': '6rem',     // 96px
        'section': 'clamp(4rem, 10vw, 6rem)', // Section vertical padding
        'container': 'clamp(1.5rem, 5vw, 2.5rem)', // Container horizontal padding
      },
      borderRadius: {
        'radius-sm': '0.25rem',   // 4px
        'radius-md': '0.5rem',    // 8px
        'radius-lg': '0.75rem',   // 12px
        'radius-xl': '1rem',      // 16px
        'radius-2xl': '1.5rem',   // 24px
      },
      borderWidth: {
        'hairline': '0.5px',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px 0 rgb(0 0 0 / 0.03), 0 1px 3px 1px rgb(0 0 0 / 0.05)',
        'elevation-2': '0 4px 6px -1px rgb(0 0 0 / 0.04), 0 2px 4px -2px rgb(0 0 0 / 0.03)',
        'elevation-3': '0 10px 15px -3px rgb(0 0 0 / 0.04), 0 4px 6px -4px rgb(0 0 0 / 0.02)',
        'elevation-4': '0 20px 25px -5px rgb(0 0 0 / 0.04), 0 8px 10px -6px rgb(0 0 0 / 0.02)',
      },
      transitionDuration: {
        'fast': '120ms',
        'normal': '200ms',
        'slow': '350ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}