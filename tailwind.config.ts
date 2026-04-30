import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-background": "#0c0d16",
      },
    },
    plugins: [],
  },
} satisfies Config;
