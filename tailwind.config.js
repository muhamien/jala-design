/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      "xs": "0.786rem",
      "sm": "0.857rem",
      "base": "1rem",
      // "lg": "1.286rem",
      "xl": "1.286rem",
      "2xl": "1.429rem",
      "3xl": "1.714rem",
      "4xl": "2.143rem",
      "5xl": "2.571rem",
      "6xl": "3.429rem",
    },
    extend: {
      lineHeight: {
        '11': '4rem',
      },
      fontFamily: {
        sans : ['Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
        serif: ['Inter, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
        mono: ['IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace']
      },
      colors: {
        "base-black": "#000000",
        "base-white": "#FFFFFF",

        "jla-50": "#E8F0FF",
        "jla-100": "#D1E3F9",
        "jla-200": "#B5D7FF",
        "jla-300": "#8EC5F9",
        "jla-400": "#73B9FA",
        "jla-500": "#4EA3F2",
        "jla-600": "#1B91FF",
        "jla-base": "#0083F2",
        "jla-800": "#1664D8",
        "jla-900": "#1258AB",
        "jla-950": "#0F4476",
        "jhv-50": "#FEF6EE",
        "jhv-100": "#FEEBD6",
        "jhv-200": "#FBD2AD",
        "jhv-300": "#F8B279",
        "jhv-400": "#F58842",
        "jhv-500": "#F16419",
        "jhv-600": "#E24D14",
        "jhv-base": "#BC3912",
        "jhv-800": "#952E17",
        "jhv-900": "#782916",
        "jhv-950": "#782916",
      }
    },
  },
  plugins: [],
}

