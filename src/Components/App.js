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
      {id:1 , name:"همبرگر مرغ" , price:"93,000T" , detalis:["مرغ 180 گرم" , "سبزیجات" , "سس قارچ"]  , picture:"bg-burger-makhsose-image"},
      {id:2 , name:"همبرگر مخصوص" , price:"59,000T" , detalis:["برگر 60% کارخانه ،مام" , "سبزیجات"]  , picture:"bg-burger-makhsose-image"},
      {id:3 , name:"رویال برگر" , price:"78,000T" , detalis:["برگر 60% کارخانه ،مام" , "سبزیجات"]  , picture:"bg-burger-makhsose-image"},
      {id:4 , name:"چیز برگر" , price:"69,000T" , detalis:["برگر۶۰٪ کارخانه" , "پنیر گودا" , "سبزیجات"]  , picture:"bg-chize-burger-image"},
      {id:5 , name:"همبرگر دست ساز" , price:"97,000T" , detalis:["گوشت 170 گرم" , "سس قارچ" , "سبزیجات"]  , picture:"bg-burger-dast-saz-image"},
      {id:6 , name:"همبرگر دست ساز ویژه" , price:"113,000T" , detalis:["گوشت 170 گرم" , "قارچ" , "پنیر" , "سبزیجات"]  , picture:"bg-burger-dast-saz-vizhe-image"},
      {id:7 , name:"همبرگر دست ساز اسپشیال" , price:"145,000T" , detalis:["گوشت 170 گرم" , " دو عدد فیله‌ی مرغ" , "دو ورق ژامبون" , "قارچ" , "پنیر گودا", "پنیر پیتزا", "پنیر سرخ شده"]  , picture:"bg-burger-dast-saz-special-image"},
    ],
    listSandwich : [ 
      {id: 1 , name:"کوکتل گوشت" , price:"48,000T" , detalis:["کوکتل %70" , "سبزیجات تازه‌ی روز"]  , picture:"bg-koktel-gosht-image"},
      {id: 2 , name:"کوکتل ویژه" , price:"63,000T" , detalis:["کوکتل %70" , "قارچ" , "پنیر"]  , picture:"bg-koktel-vizhe-image"},
      {id: 3 , name:"کوکتل بندری" , price:"67,000T" , detalis:["کوکتل %70" , "پیاز" , "فلفل دلمه" , "ادویه مخصوص فرحزاد"]  , picture:"bg-bandari-image"},
      {id: 4 , name:"کوکتل بندری ویژه" , price:"69,000T" , detalis:["کوکتل %70" , "پیاز" , "فلفل دلمه" , "ادویه مخصوص فرحزاد", "قارچ" , "سبزیجات" , "پنیر"]  , picture:"bg-bandari-vizhe-image"},
      {id: 5 , name:"هات داگ ساده" , price:"57,000T" , detalis:["هات داگ %75" , "سبزیجات"]  , picture:"bg-hotdog-image"},
      {id: 6 , name:"هات داگ رویال" , price:"73,000T" , detalis:["هات داگ %70" , "قارچ" , "پنیر" , "سبزیجات"]  , picture:"bg-hotdog-royal-image"},
      {id: 7 , name:"فلافل" , price:"40,000T" , detalis:["پنج عدد قرص فلافل دست ساز " , "کاهو یا کلم به دلخواه مشتری"]  , picture:"bg-sandwich-morgh-image"},
      {id: 8 , name:"فلافل ویژه" , price:"55,000T" , detalis:["پنج عدد قرص فلافل دست ساز " , "کاهو یا کلم به دلخواه مشتری" , "قارچ" , "پنیر"]  , picture:"bg-sandwich-morgh-image"},
      {id: 9 , name:"ساندویچ مرغ" , price:"95,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر"]  , picture:"bg-sandwich-morgh-image"},
    ],
    listPizzaItaly : [ 
      {id: 1 , name:"مخصوص" , price:"170,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-makhsose-italy-image"},
      {id: 2 , name:"گوشت و قارچ" , price:"210,000T" , detalis:["گوشت چرخ کرده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-ghost-va-gharch-italy-image"},
      {id: 3 , name:"رست چیکن" , price:"197,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-bandari-image"},
      {id: 4 , name:"رست بیف" , price:"217,000T" , detalis:["گوشت رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]   , picture:"bg-roast-beef-italy-image"},
      {id: 5 , name:" چیکن" , price:"210,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]   , picture:"bg-chicken-italy-image"},
      {id: 6 , name:"سبزیجات" , price:"167,000T" , detalis:["قارچ" , "فلفل دلمه" , "ذرت" , "گوجه" , "پنیر ترکیبی"]   , picture:"bg-hotdog-royal-image"},
      {id: 7 , name:"پپرونی" , price:"183,000T" , detalis:["پپرونی %90" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "ذرت" , "زیتون" ]   , picture:"bg-peproni-italy-image"},
    ],
    listPizzaAmerican : [ 
      {id: 1 , name:" مینی مخصوص" , price:"63,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"] , picture:"bg-mini-makhsose-image"},
      {id: 2 , name:"پپرونی متوسط" , price:"97,000T" , detalis:["پپرونی %90" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "ذرت" , "زیتون" ]  , picture:"bg-peproni-image"},
      {id: 3 , name:"سبزیجات متوسط" , price:"83,000T" , detalis:["قارچ" , "فلفل دلمه" , "ذرت" , "گوجه" , "پنیر ترکیبی"]  , picture:"bg-peproni-image"},
      {id: 4 , name:"چیکن متوسط" , price:"115,000T" , detalis:["مرغ نگینی طعم دار شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون" , "ذرت"]  , picture:"bg-peproni-image"},
      {id: 5 , name:"رست چیکن" , price:"105,000T" , detalis:["مرغ رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-chicken-image"},
      {id: 6 , name:"مخصوص متوسط" , price:"87,000T" , detalis:["ژامبون" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"] , picture:"bg-makhsose-image"},
      {id: 7 , name:"گوشت و قارچ متوسط" , price:"113,000T" , detalis:["گوشت چرخ کرده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-gosht-va-gharch-image"},
      {id: 8 , name:"رست بیف متوسط" , price:"117,000T" , detalis:["گوشت رست شده" , "قارچ" , "پنیر ترکیبی" , "فلفل دلمه" , "زیتون"]  , picture:"bg-roast-beef-image"},
      {id: 9 , name:"نان سیر" , price:"90,000T" , detalis:[] , picture:"bg-mini-makhsose-image"},
    ],
    listApetizer : [ 
      {id: 1 , name:"سالاد ویژه فرحزاد" , price:"25,000T" , detalis:["" , "" , "" , "" , ""]  , picture:"bg-salad-vizhe-farahzad-image"},
      {id: 2 , name:"سالاد سزار" , price:"120,000T" , detalis:["" , "" , "" , "" , ""]  , picture:"bg-salad-sezar-image"},
      {id: 3 , name:"سالاد کلم" , price:"35,000T" , detalis:["" , "" , "" , "" , ""]  , picture:"bg-salad-kalam-image"},
    ],
    listDrinks : [],
    listFried : [
      {id: 1 , name:"سیب زمینی" , price:"50,000T" , detalis:["" , "" , "" , "" , ""]  , picture:"bg-sib-zamini-image"},
      {id: 2 , name:"سیب زمینی ویژه" , price:"87,000T" , detalis:["" , "" , "" , "" , ""]  , picture:"bg-sib-zamini-vizhe-image"},
      {id: 3 , name:"قارچ سوخاری" , price:"T" , detalis:["" , "" , "" , "" , ""]  , picture:"bg-gharch-sokhari-image"},
      {id: 4 , name:"کنتاکی" , price:"T" , detalis:["" , "" , "" , "" , ""]  , picture:"bg-kentaki-image"},
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
        listDrink : state.listDrink,
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
                      <Route path="/listDrink" element={<Menu page="listDrink" />} />
                      <Route path="/listApetizer" element={<Menu page="listApetizer" />} />
        </SlideRoutes>
        <Footer />
      </Context.Provider>
    </main>
  );
}

export default App;
