import { BrowserRouter , Route , Routes} from 'react-router-dom';
import {useReducer} from 'react';

// AuthContext
import AuthContext from '../Context/AuthContext';
import Context from '../Context/Context';
// Reducers
import AuthReducer from '../Reducers/AuthReducer';
import Reducer from '../Reducers/Reducer';


import MainMenu from './MainMenu/Mainmenu';
import Admin from './Admin/Admin';
import Login from './Admin/Auth/Login';

export default function App() {

  const [stateAuth , dispatchAuth] = useReducer(AuthReducer  , {dataToken : document.cookie})
  
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
  
  return(
    <AuthContext.Provider value={{dataToken : stateAuth.dataToken , dispatchAuth }}>
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
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<MainMenu />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </AuthContext.Provider>
  )
}