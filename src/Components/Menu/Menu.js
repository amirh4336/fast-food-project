import {useContext} from 'react';

// context
import Context from '../../Context/Context';  

// Components
import TabFoods from "./TabFoods";
import ItemsFood from "./ItemsFood";

export default function List() {
    
    const { listBurger , listSandwich , listPizza , listApetizer , listFried } = useContext(Context);

    // todos.map(todo => <Todo  key={todo.id} todo={todo} />)
    return(
        <>
            <TabFoods />
            <div className="List px-6 py-10 flex flex-col mt-[10rem]">
                {
                    listFried.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                }
            </div>
        </>
    )
}