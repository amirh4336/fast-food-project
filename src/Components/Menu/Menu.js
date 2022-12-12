// Components
import TabFoods from "./TabFoods";

// Svg
import foodSvg from './../../Assets/Logos/fast-food-svgrepo-com (2).svg';


// images
import sandwichKok from './../../Assets/Images/sandwich-kok.jpg';

export default function List() {
    
    return(
        <>
            <TabFoods />
            <div className="List px-6 py-10 flex flex-col space-y-10 ">
                <div className="card bg-white relative z-10 text-black rounded-md text-center mb-5 ring-rose-500  ring-4">
                    <div className="card-header">
                        <div className=" absolute text-xl inset-x-0 top-0 -mt-4 text-white bg-rose-500 max-w-[14rem] mx-auto p-1 rounded-xl flex justify-around">
                            <img className='w-4 text-white' src={foodSvg} alt="foodSvg" />
                            <p className="">ساندویچ کوکتل گوشت </p>
                            <img className='w-4 text-white' src={foodSvg} alt="foodSvg" />
                        </div>
                        <img className="w-full rounded-t-md text-white" src={sandwichKok} alt="sandwichKok" />
                    </div>
                    <div className="card-body p-5 rounded-md bg-zinc-50">
                        <div className="flex flex-wrap justify-end">
                            <div className="flex items-center mb-3 ">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">کوکتل به مقدار کافی</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal"> متوسط برای سرخ کردن</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">روغن و نمک</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">سیب زمینی متوسط</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">گوشت چرخ کرده</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">گوشت چرخ کرده</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="text-3xl bg-rose-500 rounded-b-md w-full py-3  text-white shadow-md flex justify-center"><span className="mr-2">هزار تومان</span><span>۴۸</span></div>
                    </div>
                </div>
                <div className="card bg-white relative z-10 text-black rounded-md text-center mb-5 ring-rose-500  ring-4">
                    <div className="card-header">
                        <div className=" absolute text-xl inset-x-0 top-0 -mt-4 text-white bg-rose-500 max-w-[14rem] mx-auto p-1 rounded-xl flex justify-around">
                            <img className='w-4 text-white' src={foodSvg} alt="foodSvg" />
                            <p className="">ساندویچ کوکتل گوشت </p>
                            <img className='w-4 text-white' src={foodSvg} alt="foodSvg" />
                        </div>
                        <img className="w-full rounded-t-md text-white" src={sandwichKok} alt="sandwichKok" />
                    </div>
                    <div className="card-body p-5 rounded-md bg-zinc-50">
                        <div className="flex flex-wrap justify-end">
                            <div className="flex items-center mb-3 ">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">کوکتل به مقدار کافی</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal"> متوسط برای سرخ کردن</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">روغن و نمک</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">سیب زمینی متوسط</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">گوشت چرخ کرده</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                            <div className="flex items-center mb-3">
                                <p className="ml-2 text-sm sm:text-lg text-slate-500 font-normal">گوشت چرخ کرده</p>
                                <svg className="bi bi-check-lg w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="text-3xl bg-rose-500 rounded-b-md w-full py-3  text-white shadow-md flex justify-center"><span className="mr-2">هزار تومان</span><span>۴۸</span></div>
                    </div>
                </div>     
            </div>
        </>
    )
}