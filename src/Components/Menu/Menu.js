import {useContext} from 'react';

// context
import Context from '../../Context/Context';  

// Components
import TabFoods from "./TabFoods";
import ItemsFood from "./ItemsFood";

export default function List() {
    
    const { listBurger } = useContext(Context);

    // todos.map(todo => <Todo  key={todo.id} todo={todo} />)
    return(
        <>
            <TabFoods />
            <div className="List px-6 py-10 flex flex-col mt-[10rem]">
                {
                    listBurger.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood} />)
                }
            </div>
        </>
    )
}