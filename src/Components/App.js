import {useReducer} from 'react';
// Context
import Context from '../Context/Context'

// Reducers
import Reducer from '../Reducers/Reducer'


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
  })


  return (
    <main className="min-h-screen font-['Vazir'] " >
      <Context.Provider  value={{
        listBurger : state.listBurger,
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
