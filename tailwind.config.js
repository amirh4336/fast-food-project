/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        // bg tabs
        'pizza-image': "url('./Assets/Icons/pizza.png')",
        'burger-image': "url('./Assets/Icons/burger.png')",
        'sandwich-image': "url('./Assets/Icons/sandwich.png')",
        'fried-image': "url('./Assets/Icons/fried.png')",
        'drinks-image': "url('./Assets/Icons/drinks.png')",
        'apetizer-image': "url('./Assets/Icons/apetizer.png')",
        // bg food items

        // burger
        'burger-dast-saz-img' : "url('./Assets/Images/foods-min/burger/burger-dast-saz-img.jpg')",
        'burger-dast-saz-special-img' : "url('./Assets/Images/foods-min/burger/burger-dast-saz-special-img.jpg')",
        'burger-dast-saz-vizhe-img' : "url('./Assets/Images/foods-min/burger/burger-dast-saz-vizhe-img.jpg')",
        'burger-makhsose-img' : "url('./Assets/Images/foods-min/burger/burger-makhsose-img.jpg')",
        'chize-burger-img' : "url('./Assets/Images/foods-min/burger/chize-burger-img.jpg')",
        // sandwich
        'koktel-gosht-img' : "url('./Assets/Images/foods-min/sandwich/koktel-gosht-img.jpg')",
        'koktel-vizhe-img' : "url('./Assets/Images/foods-min/sandwich/koktel-vizhe-img.jpg')",
        'bandari-img' : "url('./Assets/Images/foods-min/sandwich/bandari-img.jpg')",
        'bandari-vizhe-img' : "url('./Assets/Images/foods-min/sandwich/bandari-vizhe-img.jpg')",
        'hotdog-img' : "url('./Assets/Images/foods-min/sandwich/hotdog-img.jpg')",
        'hotdog-royal-img' : "url('./Assets/Images/foods-min/sandwich/hotdog-royal-img.jpg')",
        'falafel-img' : "url('./Assets/Images/foods-min/sandwich/falafel-img.jpg')",
        'falafel-vizhe-img' : "url('./Assets/Images/foods-min/sandwich/falafel-vizhe-img.jpg')",
        'sandwich-morgh-img' : "url('./Assets/Images/foods-min/sandwich/sandwich-morgh-img.jpg')",
        'hotdog-tanori-img' : "url('./Assets/Images/foods-min/sandwich/hotdog-tanori-img.jpg')",
        'peproni-tanori-img' : "url('./Assets/Images/foods-min/sandwich/peproni-tanori-img.jpg')",
        // pizaa 
          // italy
        'chicken-italy-image' : "url('./Assets/Images/foods-min/pizaa/italy/chicken-italy.jpg')",
        'ghost-va-gharch-italy-image' : "url('./Assets/Images/foods-min/pizaa/italy/ghost-va-gharch-italy.jpg')",
        'makhsose-italy-image' : "url('./Assets/Images/foods-min/pizaa/italy/makhsose-italy.jpg')",
        'peproni-italy-image' : "url('./Assets/Images/foods-min/pizaa/italy/peproni-italy.jpg')",
        'roast-beef-italy-image' : "url('./Assets/Images/foods-min/pizaa/italy/roast-beef-italy.jpg')",
          // american
        'chicken-image' : "url('./Assets/Images/foods-min/pizaa/american/chicken.jpg')",
        'gosht-va-gharch-image' : "url('./Assets/Images/foods-min/pizaa/american/gosht-va-gharch.jpg')",
        'mini-makhsose-image' : "url('./Assets/Images/foods-min/pizaa/american/mini-makhsose.jpg')",
        'makhsose-image' : "url('./Assets/Images/foods-min/pizaa/american/makhsose.jpg')",
        'peproni-image' : "url('./Assets/Images/foods-min/pizaa/american/peproni.jpg')",
        'roast-beef-image' : "url('./Assets/Images/foods-min/pizaa/american/roast-beef.jpg')",
        'sabzigat-image' : "url('./Assets/Images/foods-min/pizaa/american/sabzigat.jpg')",
        // Apetizer
        'sib-zamini-img' : "url('./Assets/Images/foods-min/apetizer/sib-zamini-img.jpg')",
        'sib-zamini-vizhe-img' : "url('./Assets/Images/foods-min/apetizer/sib-zamini-vizhe-img.jpg')",
        'salad-fasl-img' : "url('./Assets/Images/foods-min/apetizer/salad-fasl-img.jpg')",
        'salad-sezar-img' : "url('./Assets/Images/foods-min/apetizer/salad-sezar-img.jpg')",
        'salad-kalam-img' : "url('./Assets/Images/foods-min/apetizer/salad-kalam-img.jpg')",
        'pasta-alferedo-img' : "url('./Assets/Images/foods-min/apetizer/pasta-alferedo-img.jpg')",
        'pasta-marina-img' : "url('./Assets/Images/foods-min/apetizer/pasta-marina-img.jpg')",
        'nane-sir-img' : "url('./Assets/Images/foods-min/apetizer/nane-sir-img.jpg')",
        // Fried
        'burgur-sokhari-img' : "url('./Assets/Images/foods-min/fried/burgur-sokhari-img.jpg')",
        'gharch-sokhari-img' : "url('./Assets/Images/foods-min/fried/gharch-sokhari-img.jpg')",
        'file-sokhari-img' : "url('./Assets/Images/foods-min/fried/file-sokhari-img.jpg')",
      }
    },
  },
  plugins: [],
}
