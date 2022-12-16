import {useReducer , useEffect ,useState, useCallback} from 'react';
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
  });

  



  const [scrollPosition, setSrollPosition] = useState(window.pageYOffset);
  const [headerState, setHeaderState] = useState(true);
  
  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    // console.log(scrollPosition + 100);
    // console.log(scrollPosition );
    position > scrollPosition ? setHeaderState(false) :  setHeaderState(true)
    setSrollPosition(position);
  }, [scrollPosition]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true});
    

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  


  

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
