import { useContext } from 'react';

// context
import Context from '../../Context/Context';

export default function TabFoods() {

    const { headerState } = useContext(Context);
    
    return(
        <div className={`grid grid-cols-6 gap-2 fixed w-full bg-white top-20 z-30 px-3 pt-5 pb-0 text-white text-xl shadow-lg transition-all duration-300  ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'} `}>
            <div className="rounded-lg flex flex-col">
                <button className="rounded-lg shadow-sm h-14 w-full bg-cover bg-center  bg-pizza-image">
                </button>
                <h3 className="text-[.75rem] text-center p-0 m-0 text-black">پیتزا</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <button className="rounded-lg shadow-sm h-14 bg-cover bg-center  bg-sandwich-image">
                </button>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">ساندویچ</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <button className="rounded-lg shadow-sm h-14 bg-cover bg-center  bg-burger-image">
                </button>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">برگر</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <button className="rounded-lg shadow-sm h-14 bg-cover bg-center  bg-fried-image">
                </button>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">سوخاری</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <button className="rounded-lg shadow-sm h-14 bg-cover bg-center  bg-drinks-image">
                </button>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">نوشیدنی</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <button className="rounded-lg shadow-sm h-14 bg-cover bg-center  bg-apetizer-image">
                </button>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">پیش غذا</h3>
            </div>
        </div>
    )
}