import {useReducer} from 'react';
import { Route } from 'react-router-dom';

import SlideRoutes from 'react-slide-routes';
// Context
import Context from '../Context/Context';

// Reducers
import Reducer from '../Reducers/Reducer';

// Custom Hooks
import useToggleHeader from '../CustomHooks/UseToggleHeader';

// Component
import Header from './Header/Header';
import Menu from './Menu/Menu';
import TabFoods from './Menu/TabFoods/Tabs';
import Footer from './Footer/Footer';



function App() {
  // for dark mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }


 // list foods
  const [state , dispatch] = useReducer(Reducer , {
    listBurger : [
      {id:1 , name:"همبرگر دست ساز" , price:"97,000T" , picture:"bg-burger-dast-saz-image"},
      {id:2 , name:"همبرگر دست ساز اسپشیال" , price:"145,000T" , picture:"bg-burger-dast-saz-special-image"},
      {id:3 , name:"همبرگر دست ساز ویژه" , price:"113,000T" , picture:"bg-burger-dast-saz-vizhe-image"},
      {id:4 , name:"همبرگر مخصوص" , price:"59,000T" , picture:"bg-burger-makhsose-image"},
      {id:5 , name:"چیز برگر" , price:"69,000T" , picture:"bg-chize-burger-image"},
    ],
    listSandwich : [ 
      {id: 1 , name:"کوکتل گوشت" , price:"48,000T" , picture:"bg-koktel-gosht-image"},
      {id: 2 , name:"کوکتل ویژه" , price:"63,000T" , picture:"bg-koktel-vizhe-image"},
      {id: 3 , name:"کوکتل بندری" , price:"67,000T" , picture:"bg-bandari-image"},
      {id: 4 , name:"کوکتل بندری ویژه" , price:"69,000T" , picture:"bg-bandari-vizhe-image"},
      {id: 5 , name:"هات داگ ساده" , price:"57,000T" , picture:"bg-hotdog-image"},
      {id: 6 , name:"هات داگ رویال" , price:"73,000T" , picture:"bg-hotdog-royal-image"},
      {id: 7 , name:"ساندویچ مرغ" , price:"95,000T" , picture:"bg-sandwich-morgh-image"},
    ],
    listPizza : [ 
      // italy
      {id: 1 , name:"مخصوص ایتالیایی" , price:"170,000T" , picture:"bg-makhsose-italy-image"},
      {id: 2 , name:"گوشت و قارچ ایتالیایی" , price:"210,000T" , picture:"bg-ghost-va-gharch-italy-image"},
      // {id: 3 , name:"رست چیکن ایتالیایی" , price:"197,000T" , picture:"bg-bandari-image"},
      {id: 4 , name:"رست بیف ایتالیایی" , price:"217,000T" , picture:"bg-roast-beef-italy-image"},
      {id: 5 , name:" چیکن ایتالیایی" , price:"210,000T" , picture:"bg-chicken-italy-image"},
      // {id: 6 , name:"سبزیجات ایتالیایی" , price:"168,000T" , picture:"bg-hotdog-royal-image"},
      {id: 7 , name:"پپرونی ایتالیایی" , price:"183,000T" , picture:"bg-peproni-italy-image"},
      // american
      {id: 8 , name:" مینی مخصوص" , price:"63,000T" , picture:"bg-mini-makhsose-image"},
      {id: 9 , name:"مخصوص" , price:"87,000T" , picture:"bg-makhsose-image"},
      {id: 10 , name:"گوشت و قارچ" , price:"113,000T" , picture:"bg-gosht-va-gharch-image"},
      {id: 11 , name:"رست بیف" , price:"117,000T" , picture:"bg-roast-beef-image"},
      {id: 12 , name:"چیکن" , price:"105,000T" , picture:"bg-chicken-image"},
      {id: 13 , name:"پپرونی" , price:"97,000T" , picture:"bg-peproni-image"},
    ],
    listApetizer : [ 
      {id: 1 , name:"سالاد ویژه فرحزاد" , price:"25,000T" , picture:"bg-salad-vizhe-farahzad-image"},
      {id: 2 , name:"سالاد سزار" , price:"120,000T" , picture:"bg-salad-sezar-image"},
      {id: 3 , name:"سالاد کلم" , price:"35,000T" , picture:"bg-salad-kalam-image"},
    ],
    listDrinks : [],
    listFried : [
      {id: 1 , name:"سیب زمینی" , price:"50,000T" , picture:"bg-sib-zamini-image"},
      {id: 2 , name:"سیب زمینی ویژه" , price:"87,000T" , picture:"bg-sib-zamini-vizhe-image"},
      {id: 3 , name:"قارچ سوخاری" , price:"T" , picture:"bg-gharch-sokhari-image"},
      {id: 4 , name:"کنتاکی" , price:"T" , picture:"bg-kentaki-image"},
    ],
    listCurrent : [ 
      // italy
      {id: 1 , name:"مخصوص ایتالیایی" , price:"170,000T" , picture:"bg-makhsose-italy-image"},
      {id: 2 , name:"گوشت و قارچ ایتالیایی" , price:"210,000T" , picture:"bg-ghost-va-gharch-italy-image"},
      // {id: 3 , name:"رست چیکن ایتالیایی" , price:"197,000T" , picture:"bg-bandari-image"},
      {id: 4 , name:"رست بیف ایتالیایی" , price:"217,000T" , picture:"bg-roast-beef-italy-image"},
      {id: 5 , name:" چیکن ایتالیایی" , price:"210,000T" , picture:"bg-chicken-italy-image"},
      // {id: 6 , name:"سبزیجات ایتالیایی" , price:"168,000T" , picture:"bg-hotdog-royal-image"},
      {id: 7 , name:"پپرونی ایتالیایی" , price:"183,000T" , picture:"bg-peproni-italy-image"},
      // american
      {id: 8 , name:" مینی مخصوص" , price:"63,000T" , picture:"bg-mini-makhsose-image"},
      {id: 9 , name:"مخصوص" , price:"87,000T" , picture:"bg-makhsose-image"},
      {id: 10 , name:"گوشت و قارچ" , price:"113,000T" , picture:"bg-gosht-va-gharch-image"},
      {id: 11 , name:"رست بیف" , price:"117,000T" , picture:"bg-roast-beef-image"},
      {id: 12 , name:"چیکن" , price:"105,000T" , picture:"bg-chicken-image"},
      {id: 13 , name:"پپرونی" , price:"97,000T" , picture:"bg-peproni-image"},
    ]
  });
  // movment for header
  const headerState = useToggleHeader();

  


  return (
    <main className="min-h-screen font-['Vazir'] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]  " >
      <Context.Provider  value={{
        listBurger : state.listBurger,
        listSandwich : state.listSandwich,
        listPizza : state.listPizza,
        listApetizer : state.listApetizer,
        listFried : state.listFried,
        listDrink : state.listDrink,
        headerState : headerState ,
        dispatch
      }}>
        <Header />
        <TabFoods />
        <SlideRoutes>
                    <Route path="/" element={<Menu page="listPizza" />} />
                    <Route path="/listSandwich" element={<Menu page="listSandwich" />} />
                    <Route path="/listBurger" element={<Menu page="listBurger" />} />
                    <Route path="/listFried" element={<Menu page="listFried" />} />
                    <Route path="/listDrink" element={<Menu page="listDrink" />} />
                    <Route path="/listApetizer" element={<Menu page="listApetizer" />} />
        </SlideRoutes>
        <Footer />
      </Context.Provider>
    </main>
  );
}

export default App;
