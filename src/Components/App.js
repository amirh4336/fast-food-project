import { BrowserRouter , Route , Routes} from 'react-router-dom';
import {useReducer} from 'react';

// AuthContext
import AuthContext from '../Context/AuthContext';
// Reducers
import AuthReducer from '../Reducers/AuthReducer';


import MainMenu from './MainMenu/Mainmenu';
import Admin from './Admin/Admin';
import Login from './Admin/Auth/Login';

export default function App() {

  const [state , dispatch] = useReducer(AuthReducer  , {dataToken : document.cookie})
  
  return(
    <AuthContext.Provider value={{dataToken : state.dataToken , dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainMenu />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}