import { NavLink } from 'react-router-dom';



export default function TabFood({TabsFood}) {

    const {name , bg , path} = TabsFood
    
    return(
        <div className="rounded-lg flex flex-col">
            <NavLink to={{pathname: path}} className={({ isActive }) => {   
                                                                            let className = 'rounded-lg border h-14 w-full flex justify-center items-center';    
                                                                            if (isActive) {
                                                                                className += ' bg-[#052130]'
                                                                            } else {
                                                                                className += ''
                                                                            }
                                                                            return className
                                                                        }}>
                <div className={`h-12 w-12 bg-cover bg-center  ${bg}`}></div>
            </NavLink>
            <h3 className="text-[.75rem] text-center p-0 m-0 text-[#052130] ">{`${name}`}</h3>
        </div>
    )
}