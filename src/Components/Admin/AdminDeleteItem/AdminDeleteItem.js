import {useContext} from 'react';

// context
import Context from '../../../Context/Context';
import AuthContext from '../../../Context/AuthContext';
// axios
import axios from 'axios';


export default function AdminDeleteItem({setShowTostify}) {
  
  const {setShowDeleteItem , dispatch , IdItems} = useContext(Context);
	const authContext = useContext(AuthContext);
	let deleteItems = () => {
		setShowDeleteItem(false)
    // request to server
		setShowTostify(
      axios.delete(`https://api.pizzafarahzad.ir/v1/products/${IdItems}` , {headers: { 'content-type': 'multipart/form-data' , 'Authorization' : `Bearer ${authContext.dataToken}`}})
        .then(response => {
          dispatch({ type : 'refresh' })
          return response.data.message
        })
        .catch(err => {
            if (err.response){
              window.alert(err.response.data.message)
              return err.data.message
            //do something
            
            }else if(err.request){
              window.alert(err.request.data.message)
              return err.data.message
            //do something else
            
            }else if(err.message){
              window.alert(err.message.data.message)
              return err.data.message
            //do something other than the other two
            
            }
        })
    )
	}

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

				<button type="submit" onClick={deleteItems}  className="bg-red-500 text-white py-2 text-lg rounded-[4px] flex justify-center">
					<span className="ml-1">
					</span>
					حذف
				</button>
			</div>
      </div>
    </div>
  )
}