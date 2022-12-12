

export default function List() {
    
    return(
        <div className="grid grid-cols-3 gap-4 m-3 text-white">
            <div className="rounded-lg bg-cover bg-center  bg-pizza-image">
                <button className="col-span-1 rounded-lg py-4 w-full bg-gradient-to-r from-[#000000aa] to-[#0000001c]">پیتزا</button>
            </div>
            <div className="rounded-lg bg-cover bg-center  bg-sandwich-image">
                <button className="col-span-1 rounded-lg py-4 w-full bg-gradient-to-r from-[#000000aa] to-[#0000001c]">ساندویچ</button>
            </div>
            <div className="rounded-lg bg-cover bg-center  bg-burger-image">
                <button className="col-span-1 rounded-lg py-4 w-full bg-gradient-to-r from-[#000000aa] to-[#0000001c]">برگر</button>
            </div>
            <div className="rounded-lg bg-cover bg-center  bg-fried-image">
                <button className="col-span-1 rounded-lg py-4 w-full bg-gradient-to-r from-[#000000aa] to-[#0000001c]">سوخاری</button>
            </div>
            <div className="rounded-lg bg-cover bg-center  bg-drinks-image">
                <button className="col-span-1 rounded-lg py-4 w-full bg-gradient-to-r from-[#000000aa] to-[#0000001c]">نوشیدنی</button>
            </div>
            <div className="rounded-lg bg-cover bg-center  bg-apetizer-image">
                <button className="col-span-1 rounded-lg py-4 w-full bg-gradient-to-r from-[#000000aa] to-[#0000001c]">پیش غذا</button>
            </div>
        </div>
    )
}