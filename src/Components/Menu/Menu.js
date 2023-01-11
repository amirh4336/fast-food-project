import {useContext , memo} from 'react';

// context
import Context from '../../Context/Context';

// food images



// Components
import ItemsFood from "./ItemsFood";

const List = ({page , Show}) => {
    
    const { listPizzaItaly , listPizzaAmerican , listBurger , listSandwich , listApetizer , listDrinks , listFried} = useContext(Context);

    console.log("child menu");
    return(
        <>
            <div className={`List bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] px-6 py-10 grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 mt-[10rem] transition-all ${Show ? 'pt-[5rem]' : ''}`}>
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

export default memo(List , (prevProps , nextProps) => {
    // console.log(prevProps , nextProps);
    return prevProps.page === nextProps.page
})