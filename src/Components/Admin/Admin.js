import { Navigate} from "react-router-dom";
import React , {useReducer , useState , useContext} from 'react';
import { Route } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

//Context
import Context from '../../Context/Context';
import AuthContext from '../../Context/AuthContext';
// Reducers
import AdminReducer from '../../Reducers/AdminReducer';



// Components 
import AdminHeader from './AdminHeader/AdminHeader';
// import Form from './AdminForm/Form';
// import AdminDeleteItem from './AdminDeleteItem/AdminDeleteItem';
import AdminMenu from './AdminMenu/AdminMenu';
import ToastifyAlert from './ToastifyAlert/ToastifyAlert';
const Form = React.lazy(() => import("./AdminForm/Form"))
const AdminDeleteItem = React.lazy(() => import("./AdminDeleteItem/AdminDeleteItem"))



export default function Admin() {

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  
  const [showDeleteItem, setShowDeleteItem] = useState(false);
  const [showTostify, setShowTostify] = useState(false);

  const [state , dispatch] = useReducer(AdminReducer , {
    showForm : showForm ,
    setShowForm : setShowForm ,
    setShowEditForm : setShowEditForm ,
    EditData : {},
    setShowDeleteItem : setShowDeleteItem ,
    IdItems : '',
    refresh : false
  });

  const authContext = useContext(AuthContext);
  
  // for sub tabs
  const [ShowSub, setShowSub] = useState(window.location.pathname === '/admin/listPizza/listPizzaAmerican' || window.location.pathname === '/admin' ? true : false)
  
  if (authContext.dataToken === '') {
    return <Navigate to="/login" replace />;
  }


  return(
    <div className="main md:flex justify-end font-['Vazir'] relative" >
      <Context.Provider  value={{
        setShowForm : state.setShowForm,
        setShowEditForm : state.setShowEditForm,
        EditData : state.EditData,
        showForm : state.showForm,
        setShowDeleteItem : state.setShowDeleteItem,
        refresh : state.refresh,
        IdItems : state.IdItems,
        dispatch
      }}>

        <AdminHeader ShowSub={ShowSub} setShowSub={setShowSub} />

        <div className={`main-content pt-[7.5rem]  ${showForm || showDeleteItem ? 'h-screen overflow-hidden': ''}`}>
          <SlideRoutes>
            <Route path="/listApetizer" element={<AdminMenu page="listApetizer" category="63df4376982d8c2ab58cf9ce" />} />
            <Route path="/listDrink" element={<AdminMenu page="listDrinks"  category="63df4348982d8c2ab58cf9c8" />} />
            <Route path="/listFried" element={<AdminMenu page="listFried"  category="63df4354982d8c2ab58cf9cb" />} />
            <Route path="/listBurger" element={<AdminMenu page="listBurger" category="63dd215162a982f0fad9beb6" />} />
            <Route path="/listSandwich" element={<AdminMenu page="listSandwich"   category="63df4335982d8c2ab58cf9c5"/>} />
            <Route path="/listPizza/listPizzaAmerican" element={<AdminMenu page="listPizzaAmerican" Show={ShowSub} subCategory="63dcdc806dcd796b259be4d9"  />} />
            <Route path="/" element={<AdminMenu page="listPizzaItaly" Show={ShowSub} subCategory="63df6a43982d8c2ab58cf9ff"  />} />
          </SlideRoutes>
        </div>

        { showForm && <Form showEditForm={showEditForm} setShowTostify={setShowTostify} /> }

        { showDeleteItem && <AdminDeleteItem setShowTostify={setShowTostify} /> }

        <ToastifyAlert  showTostify={showTostify}/>
        
      </Context.Provider>
    </div>
  )
}