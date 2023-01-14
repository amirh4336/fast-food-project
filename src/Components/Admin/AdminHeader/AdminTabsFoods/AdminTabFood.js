import { NavLink } from 'react-router-dom';



export default function AdminTabFood({TabsFood , ToggleSub}) {

    const {name , path} = TabsFood ;
    
    return(
        <div className="rounded-lg flex flex-col">
            <NavLink to={{pathname: path}} onClick={() => {ToggleSub(false)}} className={({ isActive }) => {   
                                                                            let className = 'rounded-lg border dark:border-slate-700 w-full flex justify-center items-center';    
                                                                            if (isActive) {
                                                                                className += ' bg-[#052130] dark:bg-[#ffff]  text-[#ffff] dark:text-[#052130] '
                                                                            } else {
                                                                                className += ''
                                                                            }
                                                                            return className
                                                                        }}>
                <h3 className="text-[.75rem] text-center p-0 m-0">{`${name}`}</h3>
            </NavLink>
        </div>
    )
}