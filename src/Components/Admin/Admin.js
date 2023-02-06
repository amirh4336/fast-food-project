// import { Navigate} from "react-router-dom";
import React , {useReducer , useState } from 'react';
import { Route } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

//Context
import Context from '../../Context/Context';

// Reducers
import AdminReducer from '../../Reducers/AdminReducer';



// Components 
import AdminHeader from './AdminHeader/AdminHeader';
import AddItems from './AdminForm/Form';
import AdminDeleteItem from './AdminDeleteItem/AdminDeleteItem';
import AdminMenu from './AdminMenu/AdminMenu';
import ToastifyAlert from './ToastifyAlert/ToastifyAlert';




export default function Admin() {
  // const [user, setUser] = useState(true);

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }


  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  
  const [showDeleteItem, setShowDeleteItem] = useState(false);
  const [showTostify, setShowTostify] = useState(false);

  const [state , dispatch] = useReducer(AdminReducer , {
    showForm : showForm ,
    setShowForm : setShowForm ,
    setShowEditForm : setShowEditForm ,
    EditData : {},
    setShowDeleteItem : setShowDeleteItem
  });

  // for sub tabs
  const [ShowSub, setShowSub] = useState(window.location.pathname === '/admin/listPizza/listPizzaAmerican' || window.location.pathname === '/admin' ? true : false)

  return(
    <div className="main md:flex justify-end font-['Vazir'] relative" >
      <Context.Provider  value={{
        setShowForm : state.setShowForm,
        setShowEditForm : state.setShowEditForm,
        EditData : state.EditData,
        showForm : state.showForm,
        setShowDeleteItem : state.setShowDeleteItem,
        dispatch
      }}>

        <AdminHeader ShowSub={ShowSub} setShowSub={setShowSub} />

        <div className={`main-content pt-[7.5rem]  ${showForm || showDeleteItem ? 'h-screen overflow-hidden': ''}`}>
          <SlideRoutes>
            <Route path="/listApetizer" element={<AdminMenu page="listApetizer" category="63df4376982d8c2ab58cf9ce"  />} />
            <Route path="/listDrink" element={<AdminMenu page="listDrinks" category="63df4348982d8c2ab58cf9c8"  />} />
            <Route path="/listFried" element={<AdminMenu page="listFried" category="63df4354982d8c2ab58cf9cb"  />} />
            <Route path="/listBurger" element={<AdminMenu page="listBurger" category="63dd215162a982f0fad9beb6"  />} />
            <Route path="/listSandwich" element={<AdminMenu page="listSandwich"  category="63df4335982d8c2ab58cf9c5" />} />
            <Route path="/listPizza/listPizzaAmerican" element={<AdminMenu page="listPizzaAmerican" Show={ShowSub} subCategory="63dcdc806dcd796b259be4d9"  />} />
            <Route path="/" element={<AdminMenu page="listPizzaItaly" Show={ShowSub}  subCategory="63dcdc806dcd796b259be4d9"  />} />
          </SlideRoutes>
        </div>

        { showForm ? <AddItems showEditForm={showEditForm} setShowTostify={setShowTostify} /> : '' }

        { showDeleteItem ? <AdminDeleteItem /> : '' }

        {/* {showTostify ?  : ''} */}
        <ToastifyAlert  showTostify={showTostify}/>
        
      </Context.Provider>
    </div>
  )
}