import React , {useReducer , useState } from 'react';
import { Route } from 'react-router-dom';

import SlideRoutes from 'react-slide-routes';
// Context
import Context from '../../Context/Context';

// Reducers
import Reducer from '../../Reducers/Reducer';

// Component
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';

// food image
  // burger
import burgerDastSazImg from "../../Assets/Images/foods-min/burger/burger-dast-saz-img.jpg";
import burgerDastSazSpecialImg from "../../Assets/Images/foods-min/burger/burger-dast-saz-special-img.jpg";
import burgerDastSazVizheImg from "../../Assets/Images/foods-min/burger/burger-dast-saz-vizhe-img.jpg";
import burgerMakhsoseImg from "../../Assets/Images/foods-min/burger/burger-makhsose-img.jpg";
import chizeBurgerImg from "../../Assets/Images/foods-min/burger/chize-burger-img.jpg";
  // sandwich
import koktelGoshtImg from "../../Assets/Images/foods-min/sandwich/koktel-gosht-img.jpg"
import koktelVizheImg from "../../Assets/Images/foods-min/sandwich/koktel-vizhe-img.jpg"
import bandariImg from "../../Assets/Images/foods-min/sandwich/bandari-img.jpg"
import bandariVizhemg from "../../Assets/Images/foods-min/sandwich/bandari-vizhe-img.jpg"
import hotdogImg from "../../Assets/Images/foods-min/sandwich/hotdog-img.jpg"
  // pizaa 
    // italy
import makhsoseItalyImg from "../../Assets/Images/foods-min/pizaa/italy/makhsose-italy-img.jpg"
import ghostVaGharchItalyImg from "../../Assets/Images/foods-min/pizaa/italy/ghost-va-gharch-italy-img.jpg"
import roastBeefItalyImg from "../../Assets/Images/foods-min/pizaa/italy/roast-beef-italy-img.jpg"
import chickenItalyImg from "../../Assets/Images/foods-min/pizaa/italy/chicken-italy-img.jpg"
import peproniItalyImg from "../../Assets/Images/foods-min/pizaa/italy/peproni-italy-img.jpg"
    // american
import miniMakhsoseImg from "../../Assets/Images/foods-min/pizaa/american/mini-makhsose-img.jpg"
import peproniImg from "../../Assets/Images/foods-min/pizaa/american/peproni-img.jpg"
import roastChickenImg from "../../Assets/Images/foods-min/pizaa/american/roast-chicken-img.jpg"
import makhsoseImg from "../../Assets/Images/foods-min/pizaa/american/makhsose-img.jpg"
import goshtVaGharchImg from "../../Assets/Images/foods-min/pizaa/american/gosht-va-gharch-img.jpg"
  // Apetizer
import sibZaminiImg from '../../Assets/Images/foods-min/apetizer/sib-zamini-img.jpg'
import sibZaminiVizheImg from '../../Assets/Images/foods-min/apetizer/sib-zamini-vizhe-img.jpg'
import saladFaslImg from '../../Assets/Images/foods-min/apetizer/salad-fasl-img.jpg'
import saladSezarImg from '../../Assets/Images/foods-min/apetizer/salad-sezar-img.jpg'
import saladKalamImg from '../../Assets/Images/foods-min/apetizer/salad-kalam-img.jpg'
  // Fried
import burgurSokhariImg from "../../Assets/Images/foods-min/fried/burgur-sokhari-img.jpg";
import gharchSokhariImg from "../../Assets/Images/foods-min/fried/gharch-sokhari-img.jpg";
import fileSokhariImg from "../../Assets/Images/foods-min/fried/file-sokhari-img.jpg";




function MainMenu() {
  // for dark mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }



 // list foods
  const [state , dispatch] = useReducer(Reducer , {
    listBurger : [
      // {id:1 , name:"همبرگر مرغ" , price:"93,000T" , detalis:["مرغ 180 گرم" , "سبزیجات" , "سس قارچ"]  , picture:"bg-none"},
      {id:2 , name:"همبرگر مخصوص" , price:"59,000T" , detalis:["برگر 60% کارخانه ،مام" , "سبزیجات"]  , picture: burgerMakhsoseImg},
      // {id:3 , name:"رویال برگر" , price:"78,000T" , detalis:["برگر 60% کارخانه ،مام" , "سبزیجات"]  , picture:"bg-none"},
      {id:4 , name:"چیز برگر" , price:"69,000T" , detalis:["برگر۶۰٪ کارخانه" , "پنیر گودا" , "سبزیجات"]  , picture: chizeBurgerImg },
      {id:5 , name:"همبرگر دست ساز" , price:"97,000T" , detalis:["گوشت 170 گرم" , "سس قارچ" , "سبزیجات"]  , picture: burgerDastSazImg },
      {id:6 , name:"همبرگر دست ساز ویژه" , price:"113,000T" , detalis:["گوشت 170 گرم" , "قارچ" , "پنیر" , "سبزیجات"]  , picture:burgerDastSazVizheImg},
      {id:7 , name:"همبرگر دست ساز اسپشیال" , price:"145,000T" , detalis:["گوشت 170 گرم" , " دو عدد فیله‌ی مرغ" , "دو ورق ژامبون" , "قارچ" , "پنیر گودا", "پنیر پیتزا", "پنیر سرخ شده"]  , picture: burgerDastSazSpecialImg},
    ],
    listSandwich : [ 
      {id: 1 , name:"کوکتل گوشت" , price:"48,000T" , detalis:["کوکتل %70" , "سبزیجات تازه‌ی روز"]  , picture:koktelGoshtImg},
      {id: 2 , name:"کوکتل ویژه" , price:"63,000T" , detalis:["کوکتل %70" , "قارچ" , "پنیر"]  , picture:koktelVizheImg},
      {id: 3 , name:"کوکتل بندری" , price:"57,000T" , detalis:["کوکتل %70" , "پیاز" , "فلفل دلمه" , "ادویه مخصوص فرحزاد"]  , picture: bandariImg},
      {id: 4 , name:"کوکتل بندری ویژه" , price:"69,000T" , detalis:["کوکتل %70" , "پیاز" , "فلفل دلمه" , "ادویه مخصوص فرحزاد", "قارچ" , "سبزیجات" , "پنیر"]  , picture: bandariVizhemg},
      {id: 5 , name:"هات داگ ساده" , price:"57,000T" , detalis:["هات داگ %75" , "سبزیجات"]  , picture: hotdogImg},
      // {id: 12 , name:"پپرونی تنوری" , price:"145,000T" , detalis:["پپرونی 30 ورق" , "قارچ" , "پنیر" , "هات داگ" , "سبزیجات"]  , picture:"bg-peproni-tanori-img"},
    ],
    listPizzaItaly : [ 
      {id: 1 , name:"مخصوص" , price:"170,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: makhsoseItalyImg},
      {id: 2 , name:"گوشت و قارچ" , price:"210,000T" , detalis:["گوشت چرخ کرده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: ghostVaGharchItalyImg},
      {id: 3 , name:"رست چیکن" , price:"197,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: roastBeefItalyImg},
      {id: 4 , name:"رست بیف" , price:"217,000T" , detalis:["گوشت رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]   , picture: chickenItalyImg},
      {id: 5 , name:"چیکن" , price:"210,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]   , picture: peproniItalyImg},
      // {id: 6 , name:"سبزیجات" , price:"167,000T" , detalis:["قارچ" , "فلفل دلمه" , "ذرت" , "گوجه" , "پنیر ترکیبی"]   , picture:"bg-hotdog-royal-image"},
      // {id: 7 , name:"پپرونی" , price:"183,000T" , detalis:["پپرونی %90" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "ذرت" , "زیتون" ]   , picture:"bg-peproni-italy-img"},
      // {id: 8 , name:"دیابلو" , price:"183,000T" , detalis:["خمیر ایتالیایی", "رول سوخاری" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" ]   , picture:"bg-diablo-italy-img"},
    ],
    listPizzaAmerican : [ 
      {id: 1 , name:" مینی مخصوص" , price:"63,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"] , picture: miniMakhsoseImg},
      {id: 2 , name:"پپرونی متوسط" , price:"97,000T" , detalis:["پپرونی %90" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "ذرت" , "زیتون" ]  , picture: peproniImg},
      {id: 3 , name:"سبزیجات متوسط" , price:"83,000T" , detalis:["قارچ" , "فلفل دلمه" , "ذرت" , "گوجه" , "پنیر ترکیبی"]  , picture: roastChickenImg},
      {id: 4 , name:"چیکن متوسط" , price:"115,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]  , picture: makhsoseImg},
      {id: 5 , name:"رست چیکن" , price:"105,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: goshtVaGharchImg},
      // {id: 6 , name:"مخصوص متوسط" , price:"87,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"] , picture:"bg-makhsose-img"},
      // {id: 7 , name:"گوشت و قارچ متوسط" , price:"113,000T" , detalis:["گوشت چرخ کرده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-gosht-va-gharch-img"},
      // {id: 8 , name:"رست بیف متوسط" , price:"117,000T" , detalis:["گوشت رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-roast-beef-img"},
    ],
    listApetizer : [ 
      {id: 2 , name:"سیب زمینی ویژه" , price:"87,000T" , detalis:["سیب زمینی 350 گرم" , "ژامبون" , "پنیر" , "قارچ" , "فلفل دلمه" , "زیتون"]  , picture: sibZaminiImg},
      {id: 3 , name:"سالاد فصل" , price:"25,000T" , detalis:["کاهو" , "خیار" , "گوجه" , "هویج رنده شده"]  , picture: sibZaminiVizheImg},
      {id: 4 , name:"سالاد سزار" , price:"120,000T" , detalis:["فیله‌ی مرغ" , "کاهو" , "نان تست" , "زیتون" , "سس سزار"]  , picture: saladFaslImg},
      {id: 5 , name:"سالاد کلم" , price:"35,000T" , detalis:["کلم" , "خیارشور" , "ذرت" , "هویج رنده‌ شده" , "شوید" , "سس مخصوص"]  , picture: saladSezarImg},
      {id: 6 , name:"پاستای آلفردو مرغ" , price:"140,000T" , detalis:["مخلفات پاستا" , "سس آلفردو" , "فیله مرغ مرینت دارشده" , "قارچ" , "پنه"]  , picture: saladKalamImg},

    ],
    listDrinks : [
      // {id: 23 , name:"دلستر قوطی هوفنبرگ مالت" , price:"15,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
  ],
    listFried : [
      {id: 1 , name:"برگر سوخاری" , price:"50,000T" , detalis:["برگر دست ساز 170 گرم" , "نان مک دونالد" , "گوجه" , "کاهو" , "سس مخصوص"]  , picture: burgurSokhariImg },
      {id: 2 , name:"قارچ سوخاری" , price:"65,000T" , detalis:[]  , picture: gharchSokhariImg},
      {id: 3 , name:"فیله سوخاری" , price:"95,000T" , detalis:["سه تیکه با مخلفات"]  , picture: fileSokhariImg},
    ],
  });


  // for sub tabs
  const [ShowSub, setShowSub] = useState(window.location.pathname === '/listPizza/listPizzaAmerican' || window.location.pathname === '/listPizza/listPizzaItaly' ? true : false)




  return (
    <main className="min-h-screen font-['Vazir'] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]  " >
      <Context.Provider  value={{
        listBurger : state.listBurger,
        listSandwich : state.listSandwich,
        listPizzaItaly : state.listPizzaItaly,
        listPizzaAmerican : state.listPizzaAmerican,
        listApetizer : state.listApetizer,
        listFried : state.listFried,
        listDrinks : state.listDrinks,
        dispatch
      }}>
        <Header Show={ShowSub} setShow={setShowSub} />
        <SlideRoutes>
          <Route path="/listApetizer" element={<Menu page="listApetizer" />} />
          <Route path="/listDrink" element={<Menu page="listDrinks" />} />
          <Route path="/listFried" element={<Menu page="listFried" />} />
          <Route path="/" element={<Menu page="listBurger" />} />
          <Route path="/listSandwich" element={<Menu page="listSandwich" />} />
          <Route path="/listPizza/listPizzaAmerican" element={<Menu page="listPizzaAmerican" Show={ShowSub} />} />
          <Route path="/listPizza/listPizzaItaly" element={<Menu page="listPizzaItaly" Show={ShowSub} />} />
        </SlideRoutes>
        <Footer />
      </Context.Provider>
    </main>
  );
}

export default MainMenu;
