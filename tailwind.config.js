/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-banner": "url('/banner.png')", 
        "line-bg" : "url('/line.svg')",
        "customer-happy" : "url('/customer.png')",
      },
      colors : {
        'blue-primary' : '#13418E',
        'red-primary' : '#D7252B',
        'green-primary' : '#006633'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin')
  ],
}
