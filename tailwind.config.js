/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Warna semantik dipetakan ke CSS variable (channel RGB) supaya bisa di-flip
      // otomatis oleh class `.dark` di <html> — lihat definisinya di src/index.css.
      // Format rgb(var(--x) / <alpha-value>) menjaga dukungan opacity util (mis. bg-page/80).
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        band: 'rgb(var(--color-band) / <alpha-value>)',
        code: 'rgb(var(--color-code) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        'line-strong': 'rgb(var(--color-line-strong) / <alpha-value>)',
        page: 'rgb(var(--color-page) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        air: '0 12px 40px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
