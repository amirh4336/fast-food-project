import { NavLink } from 'react-router-dom';


// Components
import TabFood from './TabFood';
import SubTabFood from './SubTab/SubTabFood';

const TabFoods = ({Show , setShow , headerState}) => {

    const listTabFoods =  [
        // { id:1 , name:"پیتزا" , bg:"bg-pizza-image" , path:"/listPizza/listPizzaItaly" },
        { id:2 , name:"ساندویچ" , bg:"bg-sandwich-image" , path:"/listSandwich" },
        { id:3 , name:"برگر" , bg:"bg-burger-image" , path:"/listBurger" },
        { id:4 , name:"سوخاری" , bg:"bg-fried-image" , path:"/listFried" },
        { id:5 , name:"نوشیدنی" , bg:"bg-drinks-image" , path:"/listDrink" },
        { id:6 , name:"پیش غذا" , bg:"bg-apetizer-image" , path:"/listApetizer" },            
    ];
    

    return(
        <>
            <div className={`grid grid-cols-6 gap-2 fixed w-full bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] top-20 z-30 px-3 pt-5 pb-0 text-xl transition-all duration-300  ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'} `}>
                
                {/* pizza list */}
                <div className="rounded-lg flex flex-col">
                    <NavLink  to={{pathname: "/"}} onClick={() => {setShow(true)}} className={({ isActive }) => {   
                                                                                                    let className = 'rounded-lg border dark:border-slate-700 h-14 w-full flex justify-center items-center';    
                                                                                                    if (isActive || window.location.pathname === '/listPizza/listPizzaAmerican' ) {
                                                                                                        className += ' bg-[#052130] dark:bg-[#F2F1EE] '
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
                    listTabFoods.map(itemTabFood => <TabFood  key={itemTabFood.id} TabsFood={itemTabFood} ToggleSub={setShow} />)
                }

            </div>
            
            <div className={`grid grid-cols-2 z-20 p-3 fixed top-[11.5rem] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] w-full text-center transition-all duration-300 ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'} ${ Show ? '' : '-translate-y-[10rem]'}`}>
                <SubTabFood />
            </div>
        </>

    )
}

export default TabFoods