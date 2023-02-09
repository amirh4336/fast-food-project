import { NavLink } from 'react-router-dom';


// Components
import AdminTabFood from './AdminTabFood';
import AdminSubTab from './AdminSubTab';

const AdminTab = ({Show , setShow }) => {

    const listTabFoods =  [
        { id:2 , name:"ساندویچ", path:"/admin/listSandwich" },
        { id:3 , name:"برگر"   , path:"/admin/listBurger" },
        { id:4 , name:"سوخاری" , path:"/admin/listFried" },
        { id:5 , name:"نوشیدنی", path:"/admin/listDrink" },
        { id:6 , name:"پیش غذا", path:"/admin/listApetizer" },            
    ];
    

    return(
        <>
            <div className={`grid grid-cols-6 gap-2 w-full fixed z-20 bg-[#ffff] text-[#052130] dark:bg-[#052130] dark:text-[#ffff] p-3 top-[4.6rem] text-xl transition-all duration-300  shadow-sm`}>
                
                {/* pizza list */}
                <div className="rounded-lg flex flex-col">
                    <NavLink  to={{pathname: "/admin"}} onClick={() => {setShow(true)}} className={() => {   
                                                                                                    let className = 'rounded-lg border dark:border-slate-700 w-full flex justify-center items-center';    
                                                                                                    if (window.location.pathname === '/admin' || window.location.pathname === '/admin/listPizza/listPizzaAmerican' ) {
                                                                                                        className += ' bg-[#052130] dark:bg-[#ffff]  text-[#ffff] dark:text-[#052130] '
                                                                                                    } else {
                                                                                                        className += ''
                                                                                                    }
                                                                                                    return className
                                                                                                }}>
                        <h3 className="text-[.75rem] text-center p-0 m-0">پیتزا</h3>
                    </NavLink>
                </div>
                
                {
                    listTabFoods.map(itemTabFood => <AdminTabFood  key={itemTabFood.id} TabsFood={itemTabFood} ToggleSub={setShow} />)
                }

            </div>
            
            <div className={`grid grid-cols-4 z-10 p-1 pt-2 fixed top-[7.9rem] bg-[#ffff] text-[#052130] dark:bg-[#052130] dark:text-[#ffff] w-full text-center transition-all duration-300 ${ Show ? 'z-20' : '-translate-y-20'} shadow-sm`}>
                <AdminSubTab />
            </div>
        </>

    )
}

export default AdminTab