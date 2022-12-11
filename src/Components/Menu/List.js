import pizzaImg from './../../Assets/Images/pizza.jpg';


export default function List() {
    
    return(
        <div className="grid grid-cols-3 gap-4 m-3 text-white">
            <button className="col-span-1 rounded-2xl py-4 bg-cover bg-center bg-zinc-900" style={{ backgroundImage: `url(${pizzaImg})` }}>پیتزا</button>
            <button className="col-span-1 rounded-2xl py-4 bg-slate-700">پیتزا</button>
            <button className="col-span-1 rounded-2xl py-4 bg-slate-700">پیتزا</button>
            <button className="col-span-1 rounded-2xl py-4 bg-slate-700">پیتزا</button>
            <button className="col-span-1 rounded-2xl py-4 bg-slate-700">پیتزا</button>
            <button className="col-span-1 rounded-2xl py-4 bg-slate-700">پیتزا</button>
        </div>
    )
}