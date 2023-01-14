import { NavLink } from 'react-router-dom';


export default function AdminSubTab () {
    
    
    
    return(
        <>  
            <NavLink to="/admin" className={({ isActive }) => { 
                                                    let className = "border dark:border-slate-700 text-sm rounded-full mr-1 p-1"
                                                    if (window.location.pathname === '/admin') {
                                                        className += ' bg-[#052130] text-[#F2F1EE] dark:bg-[#F2F1EE] dark:text-[#052130] '
                                                    } else {
                                                        className += ''
                                                    }
                                                    return className
                                                }}>
                ایتالیایی
            </NavLink>
            
            <NavLink to="/admin/listPizza/listPizzaAmerican" className={({ isActive }) => { 
                                                    let className = "border dark:border-slate-700 text-sm rounded-full mr-1 p-1"
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