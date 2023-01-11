/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        'makhsose-italy-img' : "url('./Assets/Images/foods-min/pizaa/italy/makhsose-italy-img.jpg')",
        'ghost-va-gharch-italy-img' : "url('./Assets/Images/foods-min/pizaa/italy/ghost-va-gharch-italy-img.jpg')",
        'roast-beef-italy-img' : "url('./Assets/Images/foods-min/pizaa/italy/roast-beef-italy-img.jpg')",
        'chicken-italy-img' : "url('./Assets/Images/foods-min/pizaa/italy/chicken-italy-img.jpg')",
        'peproni-italy-img' : "url('./Assets/Images/foods-min/pizaa/italy/peproni-italy-img.jpg')",
        'diablo-italy-img' : "url('./Assets/Images/foods-min/pizaa/italy/diablo-italy-img.jpg')",
          // american
        'mini-makhsose-img' : "url('./Assets/Images/foods-min/pizaa/american/mini-makhsose-img.jpg')",
        'peproni-img' : "url('./Assets/Images/foods-min/pizaa/american/peproni-img.jpg')",
        'roast-chicken-img' : "url('./Assets/Images/foods-min/pizaa/american/roast-chicken-img.jpg')",
        'makhsose-img' : "url('./Assets/Images/foods-min/pizaa/american/makhsose-img.jpg')",
        'gosht-va-gharch-img' : "url('./Assets/Images/foods-min/pizaa/american/gosht-va-gharch-img.jpg')",
        'roast-beef-img' : "url('./Assets/Images/foods-min/pizaa/american/roast-beef-img.jpg')",
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
