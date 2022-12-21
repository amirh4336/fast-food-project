import { useContext } from 'react';

// context
import Context from '../../Context/Context';    

// svg
import { Sun , Moon , BurgerList } from '../../Assets/Logos/Logos.js';

export default function Header() {
    
    const { headerState } = useContext(Context);

    let toggleMode = () => {
        
        // for changing dark mode
        if(localStorage.theme === 'light') {
            localStorage.theme = 'dark' ;
        } else {
            localStorage.theme = 'light' ;
        }

        document.documentElement.classList.toggle('dark')
    }


    return (
        <div className={`grid grid-cols-12 bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] fixed w-full top-0 z-40 items-center justify-between py-4 px-4 shadow-sm transition-all duration-300  ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'}`}>
            <div className="col-span-3 flex justify-start">
                <button  type="button" className="text-xs w-12 h-12 border dark:border-slate-700 p-2 py-1 rounded-md flex justify-center items-center" onClick={ toggleMode }>
                    { localStorage.theme === 'light' ? <Sun /> : <Moon /> }
               </button> 
                
            </div>
            <div className="col-span-6 text-3xl flex justify-center">
                FARAHZAD
            </div>
            <div className="col-span-3 flex justify-end">
                <button type="button" className="text-xs w-12 h-12 border dark:border-slate-700 p-2 py-1 rounded-md">
                    <BurgerList />
                </button>
            </div>
        </div>
    )
}