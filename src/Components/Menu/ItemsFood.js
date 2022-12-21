import {useState} from 'react';

// Style
import './ItemsFood.scss';



export default function ItemsFood({ItemsFood}) {

    const {name , price , picture} = ItemsFood

    const [state, setState] = useState(false)

    let rotate = e => setState(! state)
    return(
        <div className="card relative mt-[6rem] mb-[10rem] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]">
            <div className={`card-header w-full relative transform-style h-[9rem] flex justify-center z-10 ${state ? 'flip' : 'reverse-flip'}`} onClick={rotate}>
                <div className={`card-header-front absolute transform-style w-[95%] h-[14.5rem] bottom-[-1rem] backface bg-center bg-cover ${picture} rounded-[15px] shadow-sm flex flex-col-reverse`}>
                </div>
                <div className="card-header-back absolute transform-style rotate-y w-[95%] h-[14.5rem] bottom-[-1rem] backface bg-[#535454] rounded-[15px] text-center shadow-sm">
                    <h5 className="text-[#6F1A07] mt-7 text-5xl translate-z">Farahzad</h5>
                </div>
            </div>
            <div className="card-main w-full absolute top-0 rounded-[15px] text-center border-2 bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]"> 
                <div className="card-body p-5 rounded-[15px] pt-[11rem]">
                    <div className="flex flex-wrap justify-end">
                        <h2 className="text-2xl">{`${name}`}</h2>
                    </div>
                </div>
                <div className="card-footer">
                        <div className="text-3xl rounded-b-[15px] w-full pb-3 px-5 shadow-md flex justify-start bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]">{`${price}`}</div>
                </div>
            </div>
        </div>
    )
}