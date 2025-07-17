/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'protect-primary': '#4a86e8', // プロテクトサービスのメインカラー
        'protect-secondary': '#c9daf8', // プロテクトサービスのサブカラー
        'reuse-primary': '#f6b26b', // リユース三昧のメインカラー
        'reuse-secondary': '#fce5cd', // リユース三昧のサブカラー
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}