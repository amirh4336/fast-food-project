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

  const [state , dispatch] = useReducer(AuthReducer  , {dataToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2RmYTEyNjFlOGE3NWZmYzU5YTVjYWMiLCJpbnZhbGlkYXRlX2JlZm9yZSI6bnVsbCwiaWF0IjoxNjc1NjAxNjY5LCJleHAiOjE2NzU2ODgwNjl9.bkX_3hP4aNTxe16l29SD3YZQ0CZ9DlEJEhI6wyNj3rs"})
  
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