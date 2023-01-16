import {useContext} from 'react';

// context
import Context from '../../../Context/Context';


export default function AdminDeleteItem(params) {
  
  const {setShowDeleteItem} = useContext(Context);

  return(
    <div className="w-full z-30 backdrop-blur-sm absolute top-0 px-4 sm:px-8 h-full flex justify-center items-center font-['Vazir']">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <p className="mb-6 text-xl">آیا از حذف این غذا اطمینان دارید؟</p>
      <div className=" grid grid-cols-2 w-full gap-6 ">
				<button type="button" onClick={() => setShowDeleteItem(false)} title='Close' className="bg-orange-500 text-white py-2 text-lg rounded-[4px] flex justify-center">
					<span className="ml-1">
					</span>
					لغو
				</button>

				<button type="submit" onClick={() => setShowDeleteItem(false)}  className="bg-red-500 text-white py-2 text-lg rounded-[4px] flex justify-center">
					<span className="ml-1">
					</span>
					حذف
				</button>
			</div>
      </div>
    </div>
  )
}