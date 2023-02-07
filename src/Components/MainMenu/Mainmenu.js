import React , {useReducer , useCallback , useEffect , useState } from 'react';
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
  let fiterAmerican = (item) => {if (item.subCategory?.id === "63df6a43982d8c2ab58cf9ff") return item}
  let fiterDrinks = (item) => {if (item.category?.id === "63df4348982d8c2ab58cf9c8") return item}
  let fiterApetizer = (item) => {if (item.category?.id === "63df4376982d8c2ab58cf9ce") return item}
  let fiterFried = (item) => {if (item.category?.id === "63df4354982d8c2ab58cf9cb") return item}
  let fiterSandwich = (item) => {if (item.category?.id === "63df4335982d8c2ab58cf9c5") return item}
  let fiterBurger = (item) => {if (item.category?.id === "63dd215162a982f0fad9beb6") return item}

  const [lists, setLists] = useState([]);

  const res = useCallback(async () => {
      const res2 = await axios.get(`https://api.pizzafarahzad.ir/v1/products` )
      return setLists(res2.data.productsList)
  }, [])

  useEffect(() => {
      res()
      
  }, [res]);


  let burger = [...lists.filter(fiterBurger)]

  console.log(burger);
 // list foods
  const [state , dispatch] = useReducer(Reducer , {
    listBurger : [],
    listSandwich : [],
    listPizzaItaly : [],
    listPizzaAmerican : [],
    listApetizer : [],
    listDrinks : [],
    listFried : [],
  });


  // for sub tabs
  const [ShowSub, setShowSub] = useState(window.location.pathname === '/listPizza/listPizzaAmerican' || window.location.pathname === '/listPizza/listPizzaItaly' ? true : false)

  


  return (
    <main className="min-h-screen font-['Vazir'] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]  " >
      <Header Show={ShowSub} setShow={setShowSub} />
        {/* <SlideRoutes>
          <Route path="/listApetizer" element={<Menu page="listApetizer" category="63df4376982d8c2ab58cf9ce" />} />
          <Route path="/listDrink" element={<Menu page="listDrinks"  category="63df4348982d8c2ab58cf9c8" />} />
          <Route path="/listFried" element={<Menu page="listFried"  category="63df4354982d8c2ab58cf9cb" />} />
          <Route path="/listBurger" element={<Menu page="listBurger" category="63dd215162a982f0fad9beb6" />} />
          <Route path="/listSandwich" element={<Menu page="listSandwich"   category="63df4335982d8c2ab58cf9c5"/>} />
          <Route path="/listPizza/listPizzaAmerican" element={<Menu page="listPizzaAmerican" Show={ShowSub} subCategory="63dcdc806dcd796b259be4d9"  />} />
          <Route path="/" element={<Menu page="listPizzaItaly" Show={ShowSub} subCategory="63df6a43982d8c2ab58cf9ff"  />} />
        </SlideRoutes> */}
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
