// Components
import TabFoods from "./TabFoods";
import ItemsFood from "./ItemsFood";

export default function List() {
    
    return(
        <>
            <TabFoods />
            <div className="List px-6 py-10 flex flex-col mt-[18rem]">
                <ItemsFood />
                <ItemsFood />
                <ItemsFood />
                <ItemsFood />
            </div>
        </>
    )
}