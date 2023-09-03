/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
      "./node_modules/flowbite/**/*.js"
  ],
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

