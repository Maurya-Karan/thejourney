/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Updated to your new color palette
        primary: "#fafafa",
        secondary: "#475569", // slate-600
        tertiary: "#ffffff",
        brutalRed: "#ef4444",
        brutalYellow: "#facc15",
        brutalDark: "#0f172a", // slate-900
      },
      fontFamily: {
        // Maps font-mono to the new Space Mono import, and font-sans to Poppins
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        // Here are your custom brutalist shadows! 
        // Now you can just use `shadow-brutal` in your React components.
        brutal: "8px 8px 0px 0px rgba(15,23,42,1)",
        'brutal-sm': "4px 4px 0px 0px rgba(15,23,42,1)",
        'brutal-lg': "12px 12px 0px 0px rgba(15,23,42,1)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // You can keep these or remove them if you aren't using background images anymore
        "hero-pattern": "url('/src/assets/herobg.png')",
        "blog-pattern": "url('/src/assets/blog_bg.svg')",
      },
    },
  },
  plugins: [],
};