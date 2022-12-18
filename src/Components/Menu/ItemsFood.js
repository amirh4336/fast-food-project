import {useState} from 'react';

// Svg
// import foodSvg from './../../Assets/Logos/fast-food-svgrepo-com (2).svg';

// Style
import './ItemsFood.scss';

// images
// import sandwichKok from './../../Assets/Images/sandwich-kok.jpg';


export default function ItemsFood() {

    const [state, setState] = useState(false)

    let rotate = e => setState(! state)
    return(
        <div className="card relative mt-[6rem] mb-[10rem]">
            <div className={`card-header w-full relative transform-style h-[9rem] flex justify-center z-10 ${state ? 'flip' : 'reverse-flip'}`} onClick={rotate}>
                <div className={`card-header-front absolute transform-style w-[95%] h-[14.5rem] bottom-[-1rem] backface bg-center bg-cover bg-burger-image rounded-[15px] shadow-sm flex flex-col-reverse`}>
                </div>
                <div className={`card-header-back absolute transform-style rotate-y w-[95%] h-[14.5rem] bottom-[-1rem] backface bg-slate-100 rounded-[15px] text-center shadow-sm`}>
                    <h5 className="text-blue-700 mt-7 text-5xl translate-z">Farahzad</h5>
                </div>
            </div>
            <div className="card-main w-full absolute top-0 bg-white text-black rounded-[15px] text-center border-2 "> 
                <div className="card-body p-5 rounded-[15px] pt-[11rem]">
                    <div className="flex flex-wrap justify-end">
                        <h2 className="text-2xl">کوکتل گوشت</h2>
                    </div>
                </div>
                <div className="card-footer">
                        <div className="text-3xl rounded-b-md w-full pb-3 px-5 text-gray-800 shadow-md flex justify-start">48,000 T</div>
                </div>
            </div>
        </div>
    )
}