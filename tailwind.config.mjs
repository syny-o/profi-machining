/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
	fontFamily: {
		primary: 'var(--font-dmSans)',
		secondary: 'var(--font-barlow)',
	},
    extend: {
      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#ffca3b",
        // accent: "#0693e3",
        border: "#2C2D31",
        background: "#121315",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
	  backgroundImage: {
		hero: "url('/assets/img/hero/bg-ai.jpg')",
	  },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
