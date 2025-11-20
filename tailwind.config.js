/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Defining the prompt's specific palette
        deepVoid: '#050510',
        abyssBlue: '#0F0518',
        electricViolet: '#8F00FF',
        neonMagenta: '#FF0090',
        glassBorder: 'rgba(255, 255, 255, 0.2)',
        glassHighlight: 'rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}