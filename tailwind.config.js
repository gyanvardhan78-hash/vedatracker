/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        surface: "#1E1E1E",
        border: "#2A2A2A",
        accent: {
          DEFAULT: "#00E5FF",
          soft: "#5CF4FF",
          dim: "#0AA5B8",
        },
        muted: "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 229, 255, 0.35), 0 0 60px rgba(0, 229, 255, 0.15)",
        "glow-lg": "0 0 40px rgba(0, 229, 255, 0.45), 0 0 90px rgba(0, 229, 255, 0.2)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 30px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.08), transparent 55%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
