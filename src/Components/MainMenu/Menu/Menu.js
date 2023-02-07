import {memo , useCallback , useEffect , useState} from 'react';

// axios
import axios from 'axios';

// Components
import ItemsFood from "./ItemsFood";

const List = ({Show , category , subCategory}) => {

    const [list, setList] = useState([]);

    const res = useCallback(async () => {
        const res2 = await axios.get(`https://api.pizzafarahzad.ir/v1/products?${subCategory === undefined ? `category=${category}` : `subCategory=${subCategory}`}` )
        return setList(res2.data.productsList)
    }, [category , subCategory])

    useEffect(() => {
        res()
        
    }, [res]);


    console.log(list);

    return(
        <>
            <div className={`List bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] px-6 py-10 grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 mt-[10rem] transition-all ${Show ? 'pt-[5rem]' : ''}`}>
                {list.map(ItemFood => <ItemsFood  key={ItemFood.id} ItemsFood={ItemFood}/>)}
            </div>
        </>
    )
}

export default memo(List)