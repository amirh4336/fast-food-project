import React , {useReducer , useState} from 'react';
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
      {id:1 , name:"همبرگر مرغ" , price:"93,000T" , detalis:["مرغ 180 گرم" , "سبزیجات" , "سس قارچ"]  , picture:"bg-none"},
      {id:2 , name:"همبرگر مخصوص" , price:"59,000T" , detalis:["برگر 60% کارخانه ،مام" , "سبزیجات"]  , picture:"bg-burger-makhsose-img"},
      {id:3 , name:"رویال برگر" , price:"78,000T" , detalis:["برگر 60% کارخانه ،مام" , "سبزیجات"]  , picture:"bg-none"},
      {id:4 , name:"چیز برگر" , price:"69,000T" , detalis:["برگر۶۰٪ کارخانه" , "پنیر گودا" , "سبزیجات"]  , picture:"bg-chize-burger-img"},
      {id:5 , name:"همبرگر دست ساز" , price:"97,000T" , detalis:["گوشت 170 گرم" , "سس قارچ" , "سبزیجات"]  , picture:"bg-burger-dast-saz-img"},
      {id:6 , name:"همبرگر دست ساز ویژه" , price:"113,000T" , detalis:["گوشت 170 گرم" , "قارچ" , "پنیر" , "سبزیجات"]  , picture:"bg-burger-dast-saz-vizhe-img"},
      {id:7 , name:"همبرگر دست ساز اسپشیال" , price:"145,000T" , detalis:["گوشت 170 گرم" , " دو عدد فیله‌ی مرغ" , "دو ورق ژامبون" , "قارچ" , "پنیر گودا", "پنیر پیتزا", "پنیر سرخ شده"]  , picture:"bg-burger-dast-saz-special-img"},
    ],
    listSandwich : [ 
      {id: 1 , name:"کوکتل گوشت" , price:"48,000T" , detalis:["کوکتل %70" , "سبزیجات تازه‌ی روز"]  , picture:"bg-koktel-gosht-img"},
      {id: 2 , name:"کوکتل ویژه" , price:"63,000T" , detalis:["کوکتل %70" , "قارچ" , "پنیر"]  , picture:"bg-koktel-vizhe-img"},
      {id: 3 , name:"کوکتل بندری" , price:"57,000T" , detalis:["کوکتل %70" , "پیاز" , "فلفل دلمه" , "ادویه مخصوص فرحزاد"]  , picture:"bg-bandari-img"},
      {id: 4 , name:"کوکتل بندری ویژه" , price:"69,000T" , detalis:["کوکتل %70" , "پیاز" , "فلفل دلمه" , "ادویه مخصوص فرحزاد", "قارچ" , "سبزیجات" , "پنیر"]  , picture:"bg-bandari-vizhe-img"},
      {id: 5 , name:"هات داگ ساده" , price:"57,000T" , detalis:["هات داگ %75" , "سبزیجات"]  , picture:"bg-hotdog-img"},
      {id: 6 , name:"هات داگ رویال" , price:"73,000T" , detalis:["هات داگ %70" , "قارچ" , "پنیر" , "سبزیجات"]  , picture:"bg-hotdog-royal-img"},
      {id: 7 , name:"فلافل" , price:"40,000T" , detalis:["پنج عدد قرص فلافل دست ساز " , "کاهو یا کلم به دلخواه مشتری"]  , picture:"bg-falafel-img"},
      {id: 8 , name:"فلافل ویژه" , price:"55,000T" , detalis:["پنج عدد قرص فلافل دست ساز " , "کاهو یا کلم به دلخواه مشتری" , "قارچ" , "پنیر"]  , picture:"bg-falafel-vizhe-img"},
      {id: 9 , name:"ساندویچ مرغ" , price:"95,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر"]  , picture:"bg-sandwich-morgh-img"},
      {id: 10 , name:"هات داگ تنوری" , price:"125,000T" , detalis:["هات داگ" , "سه ورق ژامبون" , "سس قارچ" , "سیب زمینی" , "چیپس" , "پنیر"]  , picture:"bg-hotdog-tanori-img"},
      {id: 11 , name:"ساندویچ پیتزایی" , price:"63,000T" , detalis:["ژامبون" , "قارچ" , "پنیر" , "فلفل دلمه"]  , picture:"bg-none"},
      {id: 12 , name:"پپرونی تنوری" , price:"145,000T" , detalis:["پپرونی 30 ورق" , "قارچ" , "پنیر" , "هات داگ" , "سبزیجات"]  , picture:"bg-peproni-tanori-img"},
    ],
    listPizzaItaly : [ 
      {id: 1 , name:"مخصوص" , price:"170,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-makhsose-italy-img"},
      {id: 2 , name:"گوشت و قارچ" , price:"210,000T" , detalis:["گوشت چرخ کرده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-ghost-va-gharch-italy-img"},
      {id: 3 , name:"رست چیکن" , price:"197,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-none"},
      {id: 4 , name:"رست بیف" , price:"217,000T" , detalis:["گوشت رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]   , picture:"bg-roast-beef-italy-img"},
      {id: 5 , name:"چیکن" , price:"210,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]   , picture:"bg-chicken-italy-img"},
      {id: 6 , name:"سبزیجات" , price:"167,000T" , detalis:["قارچ" , "فلفل دلمه" , "ذرت" , "گوجه" , "پنیر ترکیبی"]   , picture:"bg-hotdog-royal-image"},
      {id: 7 , name:"پپرونی" , price:"183,000T" , detalis:["پپرونی %90" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "ذرت" , "زیتون" ]   , picture:"bg-peproni-italy-img"},
      {id: 8 , name:"دیابلو" , price:"183,000T" , detalis:["خمیر ایتالیایی", "رول سوخاری" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" ]   , picture:"bg-diablo-italy-img"},
    ],
    listPizzaAmerican : [ 
      {id: 1 , name:" مینی مخصوص" , price:"63,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"] , picture:"bg-mini-makhsose-img"},
      {id: 2 , name:"پپرونی متوسط" , price:"97,000T" , detalis:["پپرونی %90" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "ذرت" , "زیتون" ]  , picture:"bg-none"},
      {id: 3 , name:"سبزیجات متوسط" , price:"83,000T" , detalis:["قارچ" , "فلفل دلمه" , "ذرت" , "گوجه" , "پنیر ترکیبی"]  , picture:"bg-peproni-img"},
      {id: 4 , name:"چیکن متوسط" , price:"115,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]  , picture:"bg-none"},
      {id: 5 , name:"رست چیکن" , price:"105,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-roast-chicken-img"},
      {id: 6 , name:"مخصوص متوسط" , price:"87,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"] , picture:"bg-makhsose-img"},
      {id: 7 , name:"گوشت و قارچ متوسط" , price:"113,000T" , detalis:["گوشت چرخ کرده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-gosht-va-gharch-img"},
      {id: 8 , name:"رست بیف متوسط" , price:"117,000T" , detalis:["گوشت رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-roast-beef-img"},
    ],
    listApetizer : [ 
      {id: 1 , name:"سیب زمینی" , price:"50,000T" , detalis:[] , picture:"bg-sib-zamini-img"},
      {id: 2 , name:"سیب زمینی ویژه" , price:"87,000T" , detalis:["سیب زمینی 350 گرم" , "ژامبون" , "پنیر" , "قارچ" , "فلفل دلمه" , "زیتون"]  , picture:"bg-sib-zamini-vizhe-img"},
      {id: 3 , name:"سالاد فصل" , price:"25,000T" , detalis:["کاهو" , "خیار" , "گوجه" , "هویج رنده شده"]  , picture:"bg-salad-fasl-img"},
      {id: 4 , name:"سالاد سزار" , price:"120,000T" , detalis:["فیله‌ی مرغ" , "کاهو" , "نان تست" , "زیتون" , "سس سزار"]  , picture:"bg-salad-sezar-img"},
      {id: 5 , name:"سالاد کلم" , price:"35,000T" , detalis:["کلم" , "خیارشور" , "ذرت" , "هویج رنده‌ شده" , "شوید" , "سس مخصوص"]  , picture:"bg-salad-kalam-img"},
      {id: 6 , name:"پاستای آلفردو مرغ" , price:"140,000T" , detalis:["مخلفات پاستا" , "سس آلفردو" , "فیله مرغ مرینت دارشده" , "قارچ" , "پنه"]  , picture:"bg-pasta-alferedo-img"},
      {id: 7 , name:"پاستای مارینارا گوشت'" , price:"150,000T" , detalis:["پاستا" , "سس مارینارا" , "قارچ" , "گوشت قرمز"]  , picture:"bg-pasta-marina-img"},
      {id: 8 , name:"نان سیر" , price:"90,000T" , detalis:[]  , picture:"bg-nane-sir-img"},
    ],
    listDrinks : [
      {id: 1 , name:"بطری میراندا" , price:"8,000T" , detalis:[]  , picture:"bg-sib-zamini-image"},
      {id: 3 , name:"بطری پپسی" , price:"8,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 4 , name:"بطری سون اپ" , price:"8,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 5 , name:"قوطی پپسی" , price:"12,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 6 , name:"قوطی میراندا" , price:"12,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 7 , name:"قوطی سون اپ" , price:"12,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 8 , name:"نوشابه خانواده پپسی" , price:"20,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 9 , name:"نوشابه خانواده سون اپ" , price:"20,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 10 , name:"نوشابه خانواده میراندا" , price:"20,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 11 , name:"دلستر لیمو" , price:"21,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 12 , name:"دلستر هلو" , price:"21,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 13 , name:"دلستر استوایی" , price:"21,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 14 , name:"دلستر مالت" , price:"21,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 15 , name:"موهیتو" , price:"21,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 16 , name:"دلستر کاکتوس" , price:"21,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 17 , name:"دلستر لیمو شیشه کوچیک" , price:"15,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 18 , name:"دلستر استوایی کوچیک" , price:"15,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 19 , name:"دلستر هلو کوچیک" , price:"15,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 20 , name:"دلستر کاکتوس کوچیک" , price:"17,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 21 , name:"موهیتو کوچیک" , price:"17,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 22 , name:"دلستر قوطی هوفنبرگ لیمو" , price:"15,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 23 , name:"دلستر قوطی هوفنبرگ مالت" , price:"15,000T" , detalis:[]  , picture:"bg-sib-zamini-vizhe-image"},
  ],
    listFried : [
      {id: 1 , name:"برگر سوخاری" , price:"50,000T" , detalis:["برگر دست ساز 170 گرم" , "نان مک دونالد" , "گوجه" , "کاهو" , "سس مخصوص"]  , picture:"bg-burgur-sokhari-img"},
      {id: 2 , name:"قارچ سوخاری" , price:"65,000T" , detalis:[]  , picture:"bg-gharch-sokhari-img"},
      {id: 3 , name:"فیله سوخاری" , price:"95,000T" , detalis:["سه تیکه با مخلفات"]  , picture:"bg-file-sokhari-img"},
    ],
  });
  // movment for header
  const headerState = useToggleHeader();

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
        headerState : headerState ,
        dispatch
      }}>
        <Header />
        <TabFoods Show={ShowSub} setShow={setShowSub} />
        <SlideRoutes>
          <Route path="/listPizza/listPizzaAmerican" element={<Menu page="listPizzaAmerican" Show={ShowSub} />} />
          <Route path="/listPizza/listPizzaItaly" element={<Menu page="listPizzaItaly" Show={ShowSub} />} />
          <Route path="/listSandwich" element={<Menu page="listSandwich" />} />
          <Route path="/" element={<Menu page="listBurger" />} />
          <Route path="/listFried" element={<Menu page="listFried" />} />
          <Route path="/listDrink" element={<Menu page="listDrinks" />} />
          <Route path="/listApetizer" element={<Menu page="listApetizer" />} />
        </SlideRoutes>
        <Footer />
      </Context.Provider>
    </main>
  );
}

export default App;
