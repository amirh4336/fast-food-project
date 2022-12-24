import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

// context
import Context from '../../../../Context/Context';


export default function SubTabFood () {
    
    const { headerState } = useContext(Context);
    
    return(
        
        <div className={`grid grid-cols-2 z-20 p-3 fixed top-[11.5rem] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] w-full text-center transition-all duration-300 ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'} ${window.location.pathname === '/listPizza/listPizzaAmerican' || window.location.pathname === '/listPizza/listPizzaItaly' ? '' : '-translate-y-[10rem]'}`}>
            <NavLink to="/listPizza/listPizzaAmerican" className={({ isActive }) => { 
                                                    let className = "border dark:border-slate-700 rounded-full mr-1 p-1"
                                                    if (isActive) {
                                                        className += ' bg-[#052130] text-[#F2F1EE] dark:bg-[#F2F1EE] dark:text-[#052130] '
                                                    } else {
                                                        className += ''
                                                    }
                                                    return className
                                                }}>
                آمریکایی
            </NavLink>
            <NavLink to="/listPizza/listPizzaItaly" className={({ isActive }) => { 
                                                    let className = "border dark:border-slate-700 rounded-full mr-1 p-1"
                                                    if (isActive) {
                                                        className += ' bg-[#052130] text-[#F2F1EE] dark:bg-[#F2F1EE] dark:text-[#052130] '
                                                    } else {
                                                        className += ''
                                                    }
                                                    return className
                                                }}>
                ایتالیایی
            </NavLink>
        </div>
    )
} 