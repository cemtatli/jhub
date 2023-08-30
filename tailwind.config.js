/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '0.5rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(40%)',
          },
        },
        'make-it-bigger': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '80%': {
            transform: 'translateY(-30%)',
          },
          '90%': {
            transform: 'translateY(-10%) scale(1.75)',
          },
          '100%': {
            transform: 'translateY(0%) scale(2)',
            opacity: 0.3,
            zIndex: -1,
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-out-down': 'fade-out-down linear forwards',
        'make-it-bigger': 'make-it-bigger linear forwards',
      },
      supports: {
        'no-scroll-driven-animations': 'not(animation-timeline: scroll())',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      height: {
        'dynamic-screen': '100dvh',
        'fit-screen': 'calc(100vh - 6rem)',
        'fit-screen-mobile': 'calc(100vh - 4rem)',
      },
      minHeight: {
        'dynamic-screen': '100dvh',
        'fit-screen': 'calc(100vh - 6rem)',
        'fit-screen-mobile': 'calc(100vh - 4rem)',
      },
      maxHeight: {
        'dynamic-screen': '100dvh',
        'fit-screen': 'calc(100vh - 6rem)',
        'fit-screen-mobile': 'calc(100vh - 4rem)',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [require('tailwindcss-animate', 'prettier-plugin-tailwindcss')],
}
