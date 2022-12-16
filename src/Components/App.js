import {useReducer} from 'react';
// Context
import Context from '../Context/Context';

// Reducers
import Reducer from '../Reducers/Reducer';

// Custom Hooks
import useToggleHeader from '../CustomHooks/UseToggleHeader';

// Component
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';



function App() {

  const [state , dispatch] = useReducer(Reducer , {
    listBurger : "",
    listsandwich : "",
    listPizza : "",
    listApetizer : "",
    listDrinks : "",
    listFried : "",
  });
  
  const headerState = useToggleHeader();


  return (
    <main className="min-h-screen font-['Vazir'] " >
      <Context.Provider  value={{
        listBurger : state.listBurger,
        headerState : headerState ,
        dispatch
      }}>
        <Header />
        <Menu />
        <Footer />
      </Context.Provider>
    </main>
  );
}

export default App;
