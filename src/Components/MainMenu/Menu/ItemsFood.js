import {useState} from 'react';

// //svg
import {BackIcon} from '../../../Assets/Logos/Logos';

// Style
import './ItemsFood.scss';

// components
import DetalisFood from './DetalisFood'

export default function ItemsFood({ItemsFood}) {

    const {name , price , image , details} = ItemsFood
    
    let Detalis = [...details]

    let i = 0;
    const [state, setState] = useState(false)
    let rotate = e => setState(! state)
    return(
        <div className="card w-full relative mt-[6rem] mb-[10rem] bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]">
            
            <div className={`card-header w-full relative transform-style h-[9rem] flex justify-center z-10 ${state ? 'flip' : 'reverse-flip'}`} onClick={rotate}>
                
                <div className="card-header-front absolute transform-style w-[95%] h-[14.5rem] bottom-[-1rem] backface dark:bg-[#F2F1EE] dark:text-[#052130] bg-[#052130] text-[#F2F1EE] rounded-[16px]">
                    <img className='w-full h-full rounded-[15px] translate-z-0' src={image} alt={name}/>
                    <div className="absolute bottom-4 right-4 text-[#F2F1EE] translate-z">
                        <BackIcon />
                    </div>
                </div>

                <div className="card-header-back absolute transform-style rotate-y w-[95%] h-[14.5rem] bottom-[-1rem] backface dark:bg-[#F2F1EE] dark:text-[#052130] bg-[#052130] text-[#F2F1EE] rounded-[15px] text-center shadow-sm">
                        <h5 className="mt-7 text-5xl translate-z">Farahzad</h5>
                        <div className="grid grid-cols-2 translate-z-1">
                            {
                                Detalis.map(detailFood => <DetalisFood key={i++} Detalis={detailFood} />)
                            }
                        </div>
                    <div className="absolute bottom-4 right-4 text-[#F2F1EE] dark:text-[#052130] translate-z">
                        <BackIcon />
                    </div>
                    
                </div>
                
            </div>

            <div className="card-main w-full absolute top-0 rounded-[15px] text-center border-2 dark:border-slate-700 bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]"> 
                <div className="card-body p-5 rounded-[15px] pt-[11rem]">
                    <div className="flex flex-wrap justify-start">
                        <h2 className="text-2xl">{name}</h2>
                    </div>
                </div>
                <div className="card-footer">
                        <div className="text-3xl rounded-b-[15px] w-full pb-3 px-5 shadow-md flex justify-end bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE]">{price}</div>
                </div>
            </div>

        </div>
    )
}