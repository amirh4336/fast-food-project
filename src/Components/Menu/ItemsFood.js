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
        <div className="card bg-white text-black rounded-[15px] text-center mb-5 border-2 mt-[6rem]">
                    <div className={`card-header w-full relative transform-style h-[9rem] flex justify-center  ${state ? ' flip' : 'reverse-flip'}`} onClick={rotate}>
                        <div className={`card-header-front absolute transform-style w-[95%] h-[14.5rem] bottom-[-1rem] backface bg-center bg-cover bg-coketel-image rounded-[15px] `}>
                        </div>
                        <div className={`card-header-back absolute transform-style rotate-x w-[95%] h-[14.5rem] backface bg-slate-400 rounded-[15px]`}>
                            <h5 className="text-black mt-7 text-4xl">Farahzad</h5>
                        </div>
                    </div>
                    <div className="card-body p-5 rounded-[15px] pt-8">
                        <div className="flex flex-wrap justify-end">
                            <h2 className="text-2xl">کوکتل گوشت</h2>
                        </div>
                    </div>
                    <div className="card-footer">
                            <div className="text-3xl rounded-b-md w-full pb-3 px-5 text-gray-800 shadow-md flex justify-start">48,000 T</div>
                    </div>
                </div>
    )
}