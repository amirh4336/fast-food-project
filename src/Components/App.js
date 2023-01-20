import React , {useReducer , useState} from 'react';
import { Route , Routes  , Link} from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";

import { EffectCreative } from 'swiper';
import { useSwiper } from 'swiper/react';

import 'swiper/css/effect-fade';

import './styles.scss';

import SlideRoutes from 'react-slide-routes';
// Context
import Context from '../Context/Context';

// Reducers
import Reducer from '../Reducers/Reducer';

// Component
import Header from './Header/Header';
import SubTabFood from './Header/TabFoods/SubTab/SubTabFood';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';

// Custom Hooks
import useToggleHeader from '../CustomHooks/UseToggleHeader';


// tab food
import apetizer from './../Assets/Icons/apetizer.png';
import burger from './../Assets/Icons/burger.png';
import drinks from './../Assets/Icons/drinks.png';
import fried from './../Assets/Icons/fried.png';
import pizza from './../Assets/Icons/pizza.png';
import sandwich from './../Assets/Icons/sandwich.png';


// food image
  // burger
import burgerDastSazImg from "../Assets/Images/foods-min/burger/burger-dast-saz-img.jpg";
import burgerDastSazSpecialImg from "../Assets/Images/foods-min/burger/burger-dast-saz-special-img.jpg";
import burgerDastSazVizheImg from "../Assets/Images/foods-min/burger/burger-dast-saz-vizhe-img.jpg";
import burgerMakhsoseImg from "../Assets/Images/foods-min/burger/burger-makhsose-img.jpg";
import chizeBurgerImg from "../Assets/Images/foods-min/burger/chize-burger-img.jpg";
  // sandwich
import koktelGoshtImg from "../Assets/Images/foods-min/sandwich/koktel-gosht-img.jpg"
import koktelVizheImg from "../Assets/Images/foods-min/sandwich/koktel-vizhe-img.jpg"
import bandariImg from "../Assets/Images/foods-min/sandwich/bandari-img.jpg"
import bandariVizhemg from "../Assets/Images/foods-min/sandwich/bandari-vizhe-img.jpg"
import hotdogImg from "../Assets/Images/foods-min/sandwich/hotdog-img.jpg"
// import hotdogRoyalImg from "../Assets/Images/foods-min/sandwich/hotdog-royal-img.jpg"
// import falafelImg from "../Assets/Images/foods-min/sandwich/falafel-img.jpg"
// import falafelVizheImg from "../Assets/Images/foods-min/sandwich/falafel-vizhe-img.jpg"
// import sandwichMorghImg from "../Assets/Images/foods-min/sandwich/sandwich-morgh-img.jpg"
// import hotdogTanoriImg from "../Assets/Images/foods-min/sandwich/hotdog-tanori-img.jpg"
// import peproniTanoriImg from "../Assets/Images/foods-min/sandwich/peproni-tanori-img.jpg"
  // pizaa 
    // italy
import makhsoseItalyImg from "../Assets/Images/foods-min/pizaa/italy/makhsose-italy-img.jpg"
import ghostVaGharchItalyImg from "../Assets/Images/foods-min/pizaa/italy/ghost-va-gharch-italy-img.jpg"
import roastBeefItalyImg from "../Assets/Images/foods-min/pizaa/italy/roast-beef-italy-img.jpg"
import chickenItalyImg from "../Assets/Images/foods-min/pizaa/italy/chicken-italy-img.jpg"
import peproniItalyImg from "../Assets/Images/foods-min/pizaa/italy/peproni-italy-img.jpg"
// import diabloItalyImg from "../Assets/Images/foods-min/pizaa/italy/diablo-italy-img.jpg"
    // american
import miniMakhsoseImg from "../Assets/Images/foods-min/pizaa/american/mini-makhsose-img.jpg"
import peproniImg from "../Assets/Images/foods-min/pizaa/american/peproni-img.jpg"
import roastChickenImg from "../Assets/Images/foods-min/pizaa/american/roast-chicken-img.jpg"
import makhsoseImg from "../Assets/Images/foods-min/pizaa/american/makhsose-img.jpg"
import goshtVaGharchImg from "../Assets/Images/foods-min/pizaa/american/gosht-va-gharch-img.jpg"
// import roastBeefImg from "../Assets/Images/foods-min/pizaa/american/roast-beef-img.jpg"
  // Apetizer
import sibZaminiImg from '../Assets/Images/foods-min/apetizer/sib-zamini-img.jpg'
import sibZaminiVizheImg from '../Assets/Images/foods-min/apetizer/sib-zamini-vizhe-img.jpg'
import saladFaslImg from '../Assets/Images/foods-min/apetizer/salad-fasl-img.jpg'
import saladSezarImg from '../Assets/Images/foods-min/apetizer/salad-sezar-img.jpg'
import saladKalamImg from '../Assets/Images/foods-min/apetizer/salad-kalam-img.jpg'
// import pastaAlferedoImg from '../Assets/Images/foods-min/apetizer/pasta-alferedo-img.jpg'
// import pastaMarinaImg from '../Assets/Images/foods-min/apetizer/pasta-marina-img.jpg'
// import naneSirImg from '../Assets/Images/foods-min/apetizer/nane-sir-img.jpg'
  // Fried
import burgurSokhariImg from "../Assets/Images/foods-min/fried/burgur-sokhari-img.jpg";
import gharchSokhariImg from "../Assets/Images/foods-min/fried/gharch-sokhari-img.jpg";
import fileSokhariImg from "../Assets/Images/foods-min/fried/file-sokhari-img.jpg";

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
      {id:2 , name:"همبرگر مخصوص" , price:"59,000T" , detalis:["برگر 60% کارخانه ،مام" , "سبزیجات"]  , picture: burgerMakhsoseImg},
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
    ],
    listPizzaItaly : [ 
      {id: 1 , name:"مخصوص" , price:"170,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: makhsoseItalyImg},
      {id: 2 , name:"گوشت و قارچ" , price:"210,000T" , detalis:["گوشت چرخ کرده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: ghostVaGharchItalyImg},
      {id: 3 , name:"رست چیکن" , price:"197,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: roastBeefItalyImg},
      {id: 4 , name:"رست بیف" , price:"217,000T" , detalis:["گوشت رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]   , picture: chickenItalyImg},
      {id: 5 , name:"چیکن" , price:"210,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]   , picture: peproniItalyImg},
    ],
    listPizzaAmerican : [ 
      {id: 1 , name:" مینی مخصوص" , price:"63,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"] , picture: miniMakhsoseImg},
      {id: 2 , name:"پپرونی متوسط" , price:"97,000T" , detalis:["پپرونی %90" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "ذرت" , "زیتون" ]  , picture: peproniImg},
      {id: 3 , name:"سبزیجات متوسط" , price:"83,000T" , detalis:["قارچ" , "فلفل دلمه" , "ذرت" , "گوجه" , "پنیر ترکیبی"]  , picture: roastChickenImg},
      {id: 4 , name:"چیکن متوسط" , price:"115,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]  , picture: makhsoseImg},
      {id: 5 , name:"رست چیکن" , price:"105,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture: goshtVaGharchImg},
    ],
    listApetizer : [ 
      {id: 2 , name:"سیب زمینی ویژه" , price:"87,000T" , detalis:["سیب زمینی 350 گرم" , "ژامبون" , "پنیر" , "قارچ" , "فلفل دلمه" , "زیتون"]  , picture: sibZaminiImg},
      {id: 3 , name:"سالاد فصل" , price:"25,000T" , detalis:["کاهو" , "خیار" , "گوجه" , "هویج رنده شده"]  , picture: sibZaminiVizheImg},
      {id: 4 , name:"سالاد سزار" , price:"120,000T" , detalis:["فیله‌ی مرغ" , "کاهو" , "نان تست" , "زیتون" , "سس سزار"]  , picture: saladFaslImg},
      {id: 5 , name:"سالاد کلم" , price:"35,000T" , detalis:["کلم" , "خیارشور" , "ذرت" , "هویج رنده‌ شده" , "شوید" , "سس مخصوص"]  , picture: saladSezarImg},
      {id: 6 , name:"پاستای آلفردو مرغ" , price:"140,000T" , detalis:["مخلفات پاستا" , "سس آلفردو" , "فیله مرغ مرینت دارشده" , "قارچ" , "پنه"]  , picture: saladKalamImg},
    ],
    listDrinks : [
      {id: 1 , name:"بطری میراندا" , price:"8,000T" , detalis:[]  , picture:"bg-sib-zamini-image"},
      {id: 3 , name:"بطری پپسی" , price:"8,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 4 , name:"بطری سون اپ" , price:"8,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 5 , name:"قوطی پپسی" , price:"12,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
  ],
    listFried : [
      {id: 1 , name:"برگر سوخاری" , price:"50,000T" , detalis:["برگر دست ساز 170 گرم" , "نان مک دونالد" , "گوجه" , "کاهو" , "سس مخصوص"]  , picture: burgurSokhariImg },
      {id: 2 , name:"قارچ سوخاری" , price:"65,000T" , detalis:[]  , picture: gharchSokhariImg},
      {id: 3 , name:"فیله سوخاری" , price:"95,000T" , detalis:["سه تیکه با مخلفات"]  , picture: fileSokhariImg},
    ],
  });


  // for sub tabs
  const [ShowSub, setShowSub] = useState(false)

  let toggleSub = () =>{}

  // movment for header
  const headerState = useToggleHeader();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      let imageUrl
      let tabName
      let id
      switch (index) {
        case 0:
          imageUrl = apetizer
          tabName = "پیش غذا"
          id = "apetizer"
          break;
        case 1:
          imageUrl = fried
          tabName = "سوخاری"
          id = "fried"
          break;
        case 2:
          imageUrl = burger
          tabName = "برگر"
          id = "burger"
          break;
        case 3:
          imageUrl = sandwich
          tabName = "ساندویچ"
          id = "sandwich"
          break;
        case 4:
          imageUrl = drinks
          tabName = "نوشیدنی"
          id = "drinks"
          break;
        case 5:
          imageUrl = pizza
          tabName = "پیتزا"
          id = "pizza"
        break;
      
        default:
          break;
      }
      return (
        `<div id="${id}" class="rounded-lg flex flex-col justify-center swiper-pagination-bullet " >
          <img class="rounded-lg border max-h-[90px] mx-auto" alt="${tabName}" src="${imageUrl}" />
          <p class="text-[.75rem] text-center p-0 m-0">${tabName}</p>
        </div>`
      )
    },
  };

  
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
        <Header Show={ShowSub} setShow={setShowSub} headerState={headerState} />
        <div className={`grid grid-cols-2 z-10 p-3 fixed top-[21.5rem] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] w-full text-center transition-all duration-300 ${ headerState ? 'delay-300' : ' -translate-y-[5rem] delay-100'} ${ ShowSub ? '' : '-translate-y-[10rem]'}`}>
          <SubTabFood />
        </div>
        <Swiper onClick={() => console.log('asd')} className={`mySwiper relative ${headerState ? '' : 'showHeader'}`} pagination={pagination} modules={[Pagination]}>
          <SwiperSlide>{<Menu page="listApetizer" />}</SwiperSlide>
          <SwiperSlide>{<Menu page="listFried" />}</SwiperSlide>
          <SwiperSlide>{<Menu page="listBurger" />}</SwiperSlide>
          <SwiperSlide>{<Menu page="listSandwich" />}</SwiperSlide>
          <SwiperSlide>{<Menu page="listPizzaItaly" Show={ShowSub} />}</SwiperSlide>
          <SwiperSlide>{
            <SlideRoutes>
              <Route path="/listPizza/listPizzaAmerican" element={<Menu page="listPizzaAmerican" Show={ShowSub} />} />
              <Route path="/" element={<Menu page="listPizzaItaly" Show={ShowSub} />} />
            </SlideRoutes>
            }</SwiperSlide>
          {/* <SwiperSlide>
            <Swiper className="subSwiper" pagination={pagination2} modules={[Pagination]}>
              <SwiperSlide>{<Menu page="listPizzaItaly" Show={ShowSub} />}</SwiperSlide>
              <SwiperSlide>{<Menu page="listPizzaAmerican" Show={ShowSub} />}</SwiperSlide>
            </Swiper>
          </SwiperSlide> */}
          {/* <Route path="/listApetizer" element={<Menu page="listApetizer" />} />
          <Route path="/listDrink" element={<Menu page="listDrinks" />} />
          <Route path="/listFried" element={<Menu page="listFried" />} />
          <Route path="/" element={<Menu page="listBurger" />} />
          <Route path="/listSandwich" element={<Menu page="listSandwich" />} /> */}
          {/* <Route path="/listPizza/listPizzaItaly" element={<Menu page="listPizzaItaly" Show={ShowSub} />} />
          <Route path="/listPizza/listPizzaAmerican" element={<Menu page="listPizzaAmerican" Show={ShowSub} />} /> */}
        </Swiper>
        <Footer />
      </Context.Provider>
    </main>
  );
}

export default App;
