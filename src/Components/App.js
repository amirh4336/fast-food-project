import { BrowserRouter , Route , Routes} from 'react-router-dom';

// Context
import Context from '../Context/Context';
// Reducers
import AuthReducer from '../Reducers/Reducer';


import MainMenu from './MainMenu/Mainmenu';
import Admin from './Admin/Admin';
import Login from './Admin/Auth/Login';

export default function App() {
  
  return(
    <Context.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainMenu />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}