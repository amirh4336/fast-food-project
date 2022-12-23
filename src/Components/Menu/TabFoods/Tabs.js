import { useContext } from 'react';


// context
import Context from '../../../Context/Context';

// Components
import TabFood from './TabFood';

export default function TabFoods() {

    const { headerState } = useContext(Context);

    const listTabFoods =  [
        { id:1 , name:"پیتزا" , bg:"bg-pizza-image" , path:"/" },
        { id:2 , name:"ساندویچ" , bg:"bg-sandwich-image" , path:"/listSandwich" },
        { id:3 , name:"برگر" , bg:"bg-burger-image" , path:"/listBurger" },
        { id:4 , name:"سوخاری" , bg:"bg-fried-image" , path:"/listFried" },
        { id:5 , name:"نوشیدنی" , bg:"bg-drinks-image" , path:"/listDrink" },
        { id:6 , name:"پیش غذا" , bg:"bg-apetizer-image" , path:"/listApetizer" },            
    ];
    
    return(
        <div className={`grid grid-cols-6 gap-2 fixed w-full bg-[#F2F1EE] text-[#052130] dark:bg-[#052130] dark:text-[#F2F1EE] top-20 z-30 px-3 pt-5 pb-0 text-xl shadow-lg transition-all duration-300  ${ headerState ? 'delay-300' : ' -translate-y-20 delay-100'} `}>
            {
                listTabFoods.map(itemTabFood => <TabFood  key={itemTabFood.id} TabsFood={itemTabFood} />)
            }

        </div>
    )
}