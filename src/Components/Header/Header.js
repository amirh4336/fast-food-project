// svg
import logoSvg from './../../Assets/Logos/food-svgrepo-com.svg';
import sunSvg from './../../Assets/Logos/sun.svg';


export default function Header() {
    

    return (
        <div className="grid grid-cols-12 bg-white items-center justify-between py-2 px-4 shadow-sm">
            <button type="button" className="text-[0.6rem] col-span-3 col-start-1 bg-orange-500 text-white py-2 rounded-xl">
                تماس با ما
            </button>
            <div className="col-span-7 flex justify-center">
                <img className="w-10 " src={logoSvg} alt="logoSvg" />
            </div>
            <div className="col-span-2 flex justify-end">
                <button type="button" className="text-xs w-8 h-8 bg-orange-500 text-white p-2 py-1 rounded-full">
                    <img className='w-4 text-white' src={sunSvg} alt="Your SVG" />
                </button>
            </div>
        </div>
    )
}