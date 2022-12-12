// Components
import TabFoods from "./TabFoods";
import ItemsFood from "./ItemsFood";

export default function List() {
    
    return(
        <>
            <TabFoods />
            <div className="List px-6 py-10 flex flex-col space-y-10 ">
                <ItemsFood />
                <ItemsFood />
            </div>
        </>
    )
}