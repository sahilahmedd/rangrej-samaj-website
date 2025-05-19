import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  // theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    // extend: {
    //   colors: {
    //     border: "hsl(var(--border))",
    //     input: "hsl(var(--input))",
    //     ring: "hsl(var(--ring))",
    //     background: "hsl(var(--background))",
    //     foreground: "hsl(var(--foreground))",
    //     primary: {
    //       DEFAULT: "hsl(var(--primary))",
    //       foreground: "hsl(var(--primary-foreground))",
    //     },
    //     secondary: {
    //       DEFAULT: "hsl(var(--secondary))",
    //       foreground: "hsl(var(--secondary-foreground))",
    //     },
    //     destructive: {
    //       DEFAULT: "hsl(var(--destructive))",
    //       foreground: "hsl(var(--destructive-foreground))",
    //     },
    //     muted: {
    //       DEFAULT: "hsl(var(--muted))",
    //       foreground: "hsl(var(--muted-foreground))",
    //     },
    //     accent: {
    //       DEFAULT: "hsl(var(--accent))",
    //       foreground: "hsl(var(--accent-foreground))",
    //     },
    //     popover: {
    //       DEFAULT: "hsl(var(--popover))",
    //       foreground: "hsl(var(--popover-foreground))",
    //     },
    //     card: {
    //       DEFAULT: "hsl(var(--card))",
    //       foreground: "hsl(var(--card-foreground))",
    //     },
    //   },
    //   borderRadius: {
    //     lg: "var(--radius)",
    //     md: "calc(var(--radius) - 2px)",
    //     sm: "calc(var(--radius) - 4px)",
    //   },
    //   keyframes: {
    //     "accordion-down": {
    //       from: { height: "0" },
    //       to: { height: "var(--radix-accordion-content-height)" },
    //     },
    //     "accordion-up": {
    //       from: { height: "var(--radix-accordion-content-height)" },
    //       to: { height: "0" },
    //     },
    //   },
    //   animation: {
    //     "accordion-down": "accordion-down 0.2s ease-out",
    //     "accordion-up": "accordion-up 0.2s ease-out",
    //   },
    // },
  // },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        rangrez: {
          indigo: "#0B3E69",       // Deep Indigo
          indigo_text: "#313a45",
          indigo_dark: '#0C2340',
          saffron: "#E57A18",      // Saffron Orange
          // saffron: "#F7F1E7",
          sand_lite: "#EFD9B0",
          turquoise: "#0096A6",    // Turquoise Blue
          sand: "#F6EAD9",         // Sand Beige
          gold: "#B68D40",         // Deep Gold
          sand_hover: "#F2C94C",
          tab: "#FFF6EE"
        },
      },
      fontFamily: {
        header: ["'Playfair Display'", "serif"],
        body: ["'Lato'", "sans-serif"], // or 'Roboto'
        arabic: ["'Amiri'", "serif"], // optional for dual-language
      },
      backgroundImage: {
        rangrezPattern: "url('/path/to/pattern.png')", // use subtle block-print/Islamic pattern
      },
      boxShadow: {
        rangrez: "0 4px 6px -1px rgba(12, 35, 64, 0.2)", // soft indigo shadow
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
