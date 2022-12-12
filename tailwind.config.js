/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'pizza-image': "url('./Assets/Images/pizza.jpg')",
        'burger-image': "url('./Assets/Images/burger.jpg')",
        'sandwich-image': "url('./Assets/Images/sandwich.jpg')",
        'fried-image': "url('./Assets/Images/fried-2.jpeg')",
        'drinks-image': "url('./Assets/Images/drinks-2.jpg')",
        'apetizer-image': "url('./Assets/Images/apetizer-2.jpg')",
      }
    },
  },
  plugins: [],
}
