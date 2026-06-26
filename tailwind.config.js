/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        muted: '#64748B',
        accent: '#2563EB',
        'accent-hover': '#1d4ed8',
        surface: '#F8F9FA',
        band: '#f1f3ff',
        code: '#1e293b',
        line: '#E5E7EB',
        'line-strong': '#D1D5DB',
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
