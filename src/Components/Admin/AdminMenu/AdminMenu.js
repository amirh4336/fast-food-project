import {useContext , memo , useCallback , useEffect , useState} from 'react';

// context
import Context from '../../../Context/Context';

// axios
import axios from 'axios';

// Components
import AdminMenuItems from "./AdminMenuItems";

const List = ({Show , category , subCategory}) => {

    const [list, setList] = useState([]);

    const {refresh} = useContext(Context);
    const res = useCallback(async () => {
        const res2 = await axios.get(`https://api.pizzafarahzad.ir/v1/products?${subCategory === undefined ? `category=${category}` : `subCategory=${subCategory}`}` )
        return setList(res2.data.productsList)
    }, [category , subCategory])

    useEffect(() => {
        res()
        
    }, [res , refresh]);


    return(
        <>
            <div className={`List bg-[#ffff] text-[#052130] dark:bg-[#052130] dark:text-[#ffff] w-screen grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 transition-all ${Show ? 'pt-[2.5rem]' : ''}`}>
                {list.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood}/>)}
            </div>
        </>
    )
}

export default memo(List)