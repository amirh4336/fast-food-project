import {useContext , memo , useCallback , useEffect , useState} from 'react';

// context
import Context from '../../../Context/Context';
import AuthContext from '../../../Context/AuthContext';
// axios
import axios from 'axios';

// Components
import AdminMenuItems from "./AdminMenuItems";

const List = ({page , Show , category , subCategory }) => {
    // console.log(category , subCategory);
    // const { listPizzaItaly , listPizzaAmerican , listBurger , listSandwich , listApetizer , listDrinks , listFried} = useContext(Context);

    const [list, setList] = useState([]);

    const authContext = useContext(AuthContext);
    const res = useCallback(async () => {
        const res2 = await axios.get(`https://api.pizzafarahzad.ir/v1/products?${subCategory === undefined ? `category=${category}` : `subCategory=${subCategory}`}` , {
        headers: {
            'Authorization' : `Bearer ${authContext.dataToken}`
        }
        })
        return setList(res2.data.productsList)
    }, [authContext.dataToken , category , subCategory])

    useEffect(() => {
        res()
        
    }, [res]);


    console.log(list);

    return(
        <>
            <div className={`List bg-[#ffff] text-[#052130] dark:bg-[#052130] dark:text-[#ffff] w-screen grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 transition-all ${Show ? 'pt-[2.5rem]' : ''}`}>
                
                {
                    list.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                }
                
                {/* {(() => {
                    switch (page) {
                    case "listSandwich":  return listSandwich.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listBurger":    return listBurger.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listApetizer":  return listApetizer.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listDrinks":    return listDrinks.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listFried":     return listFried.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    case "listPizzaItaly":     return listPizzaItaly.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    default:               return listPizzaAmerican.map(ItemFood => <AdminMenuItems  key={ItemFood.id} ItemsFood={ItemFood} />)
                    }
                })()} */}
            </div>
        </>
    )
}

export default memo(List)