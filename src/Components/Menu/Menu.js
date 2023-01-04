import {useContext} from 'react';


// context
import Context from '../../Context/Context';  


// Components
import ItemsFood from "./ItemsFood";


export default function List({page , Show}) {
    
    const { listPizzaItaly , listPizzaAmerican , listBurger , listSandwich , listApetizer , listDrinks , listFried} = useContext(Context);

    // console.log(listNew);
    return(
        <>
            <div className={`List bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] px-6 py-10 flex flex-col mt-[10rem] transition-all ${Show ? 'pt-[5rem]' : ''}`}>
                {(() => {
                    switch (page) {
                    case "listSandwich":  return listSandwich.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listBurger":    return listBurger.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listApetizer":  return listApetizer.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listDrinks":    return listDrinks.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listFried":     return listFried.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listPizzaItaly":     return listPizzaItaly.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    default:               return listPizzaAmerican.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                    }
                })()}
            </div>
        </>
    )
}