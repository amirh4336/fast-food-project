import { useContext } from 'react';

// context
import Context from '../../Context/Context';    

// svg


export default function Header() {
    
    const { headerState } = useContext(Context);

    let toggleMode = () => {
        if(localStorage.theme === 'light') {
            localStorage.theme = 'dark' ;
        } else {
            localStorage.theme = 'light' ;
        }

        document.documentElement.classList.toggle('dark')
    }

    return (
        <div className={`grid grid-cols-12 bg-[#F2F1EE] dark:bg-black fixed w-full top-0 z-40 items-center justify-between py-4 px-4 shadow-sm transition-all duration-300  ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'}`}>
            <div className="col-span-3 flex justify-start">
                <button type="button" className="text-xs w-12 h-12 border text-[#052130]   p-2 py-1 rounded-md" onClick={toggleMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" >
                        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>                
                </button>
            </div>
            <div className="col-span-6 text-3xl flex justify-center text-[#052130]">
                FARAHZAD
            </div>
            <div className="col-span-3 flex justify-end">
                <button type="button" className="text-xs w-12 h-12 border text-[#052130] p-2 py-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}