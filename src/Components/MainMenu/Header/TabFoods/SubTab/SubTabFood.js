
import { NavLink } from 'react-router-dom';


export default function SubTabFood () {
    
    
    
    return(
        <>  
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
            
        </>

    )
} 