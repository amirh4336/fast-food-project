// svg
// import logoSvg from './../../Assets/Logos/food-svgrepo-com.svg';
import sunSvg from './../../Assets/Logos/sun.svg';


export default function Header() {
    

    return (
        <div className="grid grid-cols-12 bg-white fixed w-full top-0 z-40 items-center justify-between py-4 px-4 shadow-sm">
            <div className="col-span-3 flex justify-start">
                <button type="button" className="text-xs w-12 h-12 bg-gray-500 text-white p-2 py-1 rounded-full">
                    <img className='w-12 text-white' src={sunSvg} alt="Your SVG" />
                </button>
            </div>
            <div className="col-span-6 text-3xl flex justify-center">
                FARAHZAD
            </div>
            <div className="col-span-3 flex justify-end">
                <button type="button" className="text-xs w-12 h-12 bg-gray-500 text-white p-2 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}