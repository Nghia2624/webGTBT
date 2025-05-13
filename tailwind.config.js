/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",     // Deep blue-black for background
        secondary: "#1E293B",   // Slightly lighter blue-gray for components
        accent: "#3B82F6",      // Vibrant blue for highlights/buttons
        'text-primary': "#F8FAFC",    // Almost white for main text
        'text-secondary': "#94A3B8"   // Muted grayish blue for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'card': '#1E293B',     // Card background
        'hover': '#2D3748',    // Hover state
      },
      borderColor: {
        'custom': '#2D3748',   // Border color
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
} 