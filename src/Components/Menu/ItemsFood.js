

// Svg
import foodSvg from './../../Assets/Logos/fast-food-svgrepo-com (2).svg';


// images
import sandwichKok from './../../Assets/Images/sandwich-kok.jpg';


export default function ItemsFood() {

    return(
        <div className="card bg-white relative z-10 text-black rounded-[15px] text-center mb-5 border-2 mt-[6rem] pt-[9rem]">
                    <div className="w-full absolute">
                        <div className="card-header w-[95%] mx-auto  h-[14.5rem] bg-center bg-cover bg-coketel-image rounded-[15px] -mt-[14rem]">
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