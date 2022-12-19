/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        // bg tabs
        'pizza-image': "url('./Assets/Images/pizza.jpg')",
        'burger-image': "url('./Assets/Images/burger.jpg')",
        'sandwich-image': "url('./Assets/Images/sandwich.jpg')",
        'fried-image': "url('./Assets/Images/fried-2.jpeg')",
        'drinks-image': "url('./Assets/Images/drinks-2.jpg')",
        'apetizer-image': "url('./Assets/Images/apetizer-2.jpg')",
        // bg food items

        // burger
        'burger-dast-saz-image' : "url('./Assets/Images/foods-min/burger/burger-dast-saz.jpg')",
        'burger-dast-saz-special-image' : "url('./Assets/Images/foods-min/burger/burger-dast-saz-special.jpg')",
        'burger-dast-saz-vizhe-image' : "url('./Assets/Images/foods-min/burger/burger-dast-saz-vizhe.jpg')",
        'burger-makhsose-image' : "url('./Assets/Images/foods-min/burger/burger-makhsose.jpg')",
        'chize-burger-image' : "url('./Assets/Images/foods-min/burger/chize-burger.jpg')",
        // sandwich
        'bandari-image' : "url('./Assets/Images/foods-min/sandwich/bandari.jpg')",
        'bandari-vizhe-image' : "url('./Assets/Images/foods-min/sandwich/bandari-vizhe.jpg')",
        'falafel-image' : "url('./Assets/Images/foods-min/sandwich/falafel.jpg')",
        'falafel-vizhe-image' : "url('./Assets/Images/foods-min/sandwich/falafel-vizhe.jpg')",
        'hotdog-image' : "url('./Assets/Images/foods-min/sandwich/hotdog.jpg')",
        'hotdog-royal-image' : "url('./Assets/Images/foods-min/sandwich/hotdog-royal.jpg')",
        'koktel-gosht-image' : "url('./Assets/Images/foods-min/sandwich/koktel-gosht.jpg')",
        'koktel-vizhe-image' : "url('./Assets/Images/foods-min/sandwich/koktel-vizhe.jpg')",
        'sandwich-morgh-image' : "url('./Assets/Images/foods-min/sandwich/sandwich-morgh.jpg')",
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
        'salad-kalam-image' : "url('./Assets/Images/foods-min/apetizer/salad-kalam.jpg')",
        'salad-sezar-image' : "url('./Assets/Images/foods-min/apetizer/salad-sezar.jpg')",
        'salad-vizhe-farahzad-image' : "url('./Assets/Images/foods-min/apetizer/salad-vizhe-farahzad.jpg')",
        // Fried
        'gharch-sokhari-image' : "url('./Assets/Images/foods-min/fried/gharch-sokhari.jpg')",
        'kentaki-image' : "url('./Assets/Images/foods-min/fried/kentaki.jpg')",
        'sib-zamini-image' : "url('./Assets/Images/foods-min/fried/sib-zamini.jpg')",
        'sib-zamini-vizhe-image' : "url('./Assets/Images/foods-min/fried/sib-zamini-vizhe.jpg')",

      }
    },
  },
  plugins: [],
}
