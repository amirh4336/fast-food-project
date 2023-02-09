import React , {useContext , useCallback , useEffect , useState } from 'react';
import { Route } from 'react-router-dom';

import SlideRoutes from 'react-slide-routes';
// Context
import Context from '../../Context/Context';


// Component
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';

// axios
import axios from 'axios';



function MainMenu() {
  // for dark mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  // fliter for list 
  let fiterItaly = (item) => {if (item.subCategory?.id === "63df6a43982d8c2ab58cf9ff") return item}
  let fiterAmerican = (item) => {if (item.subCategory?.id === "63dcdc806dcd796b259be4d9") return item}
  let fiterDrinks = (item) => {if (item.category?.id === "63df4348982d8c2ab58cf9c8") return item}
  let fiterApetizer = (item) => {if (item.category?.id === "63df4376982d8c2ab58cf9ce") return item}
  let fiterFried = (item) => {if (item.category?.id === "63df4354982d8c2ab58cf9cb") return item}
  let fiterSandwich = (item) => {if (item.category?.id === "63df4335982d8c2ab58cf9c5") return item}
  let fiterBurger = (item) => {if (item.category?.id === "63dd215162a982f0fad9beb6") return item}

  const {dispatch} = useContext(Context);

  const res = useCallback(async () => {
      const res2 = await axios.get(`https://api.pizzafarahzad.ir/v1/products` )
      dispatch({ type : 'getList' , payload : {  
        burger : res2.data.productsList.filter(fiterBurger) ,
        italy : res2.data.productsList.filter(fiterItaly) ,
        american : res2.data.productsList.filter(fiterAmerican) ,
        drinks : res2.data.productsList.filter(fiterDrinks) ,
        apetizer : res2.data.productsList.filter(fiterApetizer) ,
        fried : res2.data.productsList.filter(fiterFried) ,
        sandwich : res2.data.productsList.filter(fiterSandwich)
      } })
  }, [dispatch])

  useEffect(() => {
      res()
  }, [res]);

  // for sub tabs
  const [ShowSub, setShowSub] = useState(window.location.pathname === '/listPizza/listPizzaAmerican' || window.location.pathname === '/' ? true : false)


  return (
    <main className="min-h-screen font-['Vazir'] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]  " >
      <Header Show={ShowSub} setShow={setShowSub} />
      <SlideRoutes>
        <Route path="/listApetizer" element={<Menu page="listApetizer" />} />
        <Route path="/listDrink" element={<Menu page="listDrinks" />} />
        <Route path="/listFried" element={<Menu page="listFried" />} />
        <Route path="/listBurger" element={<Menu page="listBurger" />} />
        <Route path="/listSandwich" element={<Menu page="listSandwich" />} />
        <Route path="/listPizza/listPizzaAmerican" element={<Menu page="listPizzaAmerican" Show={ShowSub} />} />
        <Route path="/" element={<Menu page="listPizzaItaly" Show={ShowSub} />} />
      </SlideRoutes>
      <Footer />
    </main>
  );
}

export default MainMenu;
