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

  const [state , dispatch] = useReducer(AuthReducer  , {dataToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2RjZTY4ZGI0YmU2NDk5ZjRlMDBiOGQiLCJpYXQiOjE2NzU1NzU5MzEsImV4cCI6MTY3NTY2MjMzMX0.TzhV3ApdIn8NIL5dP03lAvVwxOOGmHJPYSxc1tEfcus"})
  
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