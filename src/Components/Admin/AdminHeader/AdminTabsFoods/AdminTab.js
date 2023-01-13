import { NavLink } from 'react-router-dom';


// Components
import AdminTabFood from './AdminTabFood';
import AdminSubTab from './AdminSubTab';

const AdminTab = ({Show , setShow , headerState}) => {

    const listTabFoods =  [
        // { id:1 , name:"پیتزا" , bg:"bg-pizza-image" , path:"/listPizza/listPizzaItaly" },
        { id:2 , name:"ساندویچ" , bg:"bg-sandwich-image" , path:"/admin/listSandwich" },
        { id:3 , name:"برگر" , bg:"bg-burger-image" , path:"/admin/listBurger" },
        { id:4 , name:"سوخاری" , bg:"bg-fried-image" , path:"/admin/listFried" },
        { id:5 , name:"نوشیدنی" , bg:"bg-drinks-image" , path:"/admin/listDrink" },
        { id:6 , name:"پیش غذا" , bg:"bg-apetizer-image" , path:"/admin/listApetizer" },            
    ];
    

    return(
        <>
            <div className={`grid grid-cols-6 gap-2 w-full fixed z-20 bg-[#ffff] text-[#052130] dark:bg-[#052130] dark:text-[#ffff] px-3 pt-[6rem] pb-0 text-xl transition-all duration-300  `}>
                
                {/* pizza list */}
                <div className="rounded-lg flex flex-col">
                    <NavLink  to={{pathname: "/admin"}} onClick={() => {setShow(true)}} className={() => {   
                                                                                                    let className = 'rounded-lg border dark:border-slate-700 h-14 w-full flex justify-center items-center';    
                                                                                                    if (window.location.pathname === '/admin' || window.location.pathname === '/admin/listPizza/listPizzaAmerican' ) {
                                                                                                        className += ' bg-[#052130] dark:bg-[#ffff] '
                                                                                                    } else {
                                                                                                        className += ''
                                                                                                    }
                                                                                                    return className
                                                                                                }}>
                        <div className={`h-12 w-12 bg-cover bg-center  bg-pizza-image`}></div>
                    </NavLink>
                    <h3 className="text-[.75rem] text-center p-0 m-0">پیتزا</h3>
                </div>
                
                {
                    listTabFoods.map(itemTabFood => <AdminTabFood  key={itemTabFood.id} TabsFood={itemTabFood} ToggleSub={setShow} />)
                }

            </div>
            
            <div className={`grid grid-cols-2 z-10 p-3 fixed top-[16rem] bg-[#ffff] text-[#052130] dark:bg-[#052130] dark:text-[#ffff] w-full text-center transition-all duration-300 ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'} ${ Show ? '' : '-translate-y-[10rem]'}`}>
                <AdminSubTab />
            </div>
        </>

    )
}

export default AdminTab