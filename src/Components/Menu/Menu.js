import {useContext} from 'react';


// context
import Context from '../../Context/Context';  


// Components
import ItemsFood from "./ItemsFood";

export default function List({page}) {
    
    const { listPizza , listBurger , listSandwich , listApetizer , listDrinks , listFried} = useContext(Context);

    // console.log(listNew);
    return(
        <>
            <div className="List bg-[#F2F1EE] text-[#052130] px-6 py-10 flex flex-col mt-[10rem] ">
                {(() => {
                    switch (page) {
                    case "listSandwich":  return listSandwich.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listBurger":    return listBurger.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listApetizer":  return listApetizer.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listDrinks":    return listDrinks.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listFried":     return listFried.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    default:              return listPizza.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    }
                })()}                
            </div>
        </>
    )
}