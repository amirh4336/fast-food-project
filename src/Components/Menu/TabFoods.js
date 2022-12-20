import { useContext } from 'react';
import { Link } from 'react-router-dom';
// context
import Context from '../../Context/Context';

export default function TabFoods() {

    const { headerState } = useContext(Context);

    
    return(
        <div className={`grid grid-cols-6 gap-2 fixed w-full bg-white top-20 z-30 px-3 pt-5 pb-0 text-white text-xl shadow-lg transition-all duration-300  ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'} `}>
            <div className="rounded-lg flex flex-col">
                <Link to={{pathname : "/"}} className="rounded-lg border border-slate-100 h-14 w-full flex justify-center content-center">
                    <div className="h-12 w-12 bg-cover bg-center  bg-pizza-image"></div>
                </Link>
                <h3 className="text-[.75rem] text-center p-0 m-0 text-black">پیتزا</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <Link to={{pathname : "/listSandwich"}} className="rounded-lg border border-slate-100 h-14 w-full flex justify-center items-center">
                    <div className="h-12 w-12 bg-cover bg-center  bg-sandwich-image"></div>
                </Link>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">ساندویچ</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <Link to={{pathname : "/listBurger"}} className="rounded-lg border border-slate-100 h-14 w-full flex justify-center items-center">
                    <div className="h-12 w-12 bg-cover bg-center  bg-burger-image"></div>
                </Link>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">برگر</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <Link to={{pathname : "/listFried"}} className="rounded-lg border border-slate-100 h-14 w-full flex justify-center items-center">
                    <div className="h-12 w-12 bg-cover bg-center  bg-fried-image"></div>
                </Link>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">سوخاری</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <Link to={{pathname : "/listDrink"}} className="rounded-lg border border-slate-100 h-14 w-full flex justify-center items-center">
                    <div className="h-12 w-12 bg-cover bg-center  bg-drinks-image"></div>
                </Link>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">نوشیدنی</h3>
            </div>
            <div className="rounded-lg flex flex-col">
                <Link to={{pathname : "/listApetizer"}} className="rounded-lg border border-slate-100 h-14 w-full flex justify-center items-center">
                    <div className="h-12 w-12 bg-cover bg-center  bg-apetizer-image"></div>
                </Link>
                <h3 className="text-center text-[.75rem] rounded-lg w-full text-black">پیش غذا</h3>
            </div>
        </div>
    )
}