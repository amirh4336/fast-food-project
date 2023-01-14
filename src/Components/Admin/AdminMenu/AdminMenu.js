import {useContext , memo} from 'react';

// context
import Context from '../../../Context/Context';


// Components
import AdminMenuItems from "./AdminMenuItems";

const List = ({page , Show}) => {
    
    const { listPizzaItaly , listPizzaAmerican , listBurger , listSandwich , listApetizer , listDrinks , listFried} = useContext(Context);


    return(
        <>
            <div className={`List bg-[#ffff] text-[#052130] dark:bg-[#052130] dark:text-[#ffff] px-6 w-screen grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 transition-all ${Show ? 'pt-[2.5rem]' : ''}`}>
                {(() => {
                    switch (page) {
                    case "listSandwich":  return listSandwich.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listBurger":    return listBurger.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listApetizer":  return listApetizer.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listDrinks":    return listDrinks.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listFried":     return listFried.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listPizzaItaly":     return listPizzaItaly.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    default:               return listPizzaAmerican.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    }
                })()}
            </div>
        </>
    )
}

export default memo(List)