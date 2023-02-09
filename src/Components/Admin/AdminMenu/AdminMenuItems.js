import {useState , useContext} from 'react';

// context
import Context from '../../../Context/Context';

// //svg
import {BackIcon , Trash , EditPencil} from '../../../Assets/Logos/Logos';

// Style
import './ItemsFood.scss';

// components
import AdminDetailsFood from './AdminDetailsFood'

export default function AdminMenuItems({ItemsFood}) {
	
	const {setShowEditForm , setShowForm , dispatch , setShowDeleteItem} = useContext(Context);
	const {name , price , image , details ,id} = ItemsFood


	let Detalis = [...details]

	let i = 0;


	const [state, setState] = useState(false)
	let rotate = e => setState(!state)


  let ToggleForm = () => {
		dispatch({ type : 'DataForm' , payload : { Data : {...ItemsFood}} })
    setShowEditForm(true);
    setShowForm(true);
  } 
	
	let deleteItem = () => {
		dispatch({ type : 'IdItem' , payload : { IdItem : id} })
		setShowDeleteItem(true)
	}


	return(
		<div className="border w-full px-6">
			<div className="card w-full relative mt-[6rem] mb-[10rem] bg-[#fff] text-[#052130] dark:bg-[#052130] dark:text-[#fff]">
				
				<div className={`card-header w-full relative transform-style h-[9rem] flex justify-center z-10 ${state ? 'flip' : 'reverse-flip'}`} onClick={rotate}>
					
					<div className="card-header-front absolute transform-style w-[95%] h-[14.5rem] bottom-[-1rem] backface dark:bg-[#fff] dark:text-[#052130] bg-[#052130] text-[#fff] rounded-[16px]">
						<img className='w-full h-full rounded-[15px] translate-z-0' src={image} alt={name}/>
						<div className="absolute bottom-4 right-4 text-[#fff] translate-z">
							<BackIcon />
						</div>
					</div>

					<div className="card-header-back absolute transform-style rotate-y w-[95%] h-[14.5rem] bottom-[-1rem] backface dark:bg-[#fff] dark:text-[#052130] bg-[#052130] text-[#fff] rounded-[15px] text-center shadow-sm">
							<h5 className="mt-7 text-5xl translate-z">Farahzad</h5>
							<div className="grid grid-cols-2 translate-z-1">
								{
									Detalis.map(detailFood => <AdminDetailsFood key={i++} Detalis={detailFood} />)
								}
							</div>
						<div className="absolute bottom-4 right-4 text-[#fff] dark:text-[#052130] translate-z">
							<BackIcon />
						</div>
						
					</div>
					
				</div>

				<div className="card-main w-full absolute top-0 rounded-[15px] text-center border-2 dark:border-slate-700 bg-[#fff] text-[#052130] dark:bg-[#052130] dark:text-[#fff]"> 
					<div className="card-body p-5 rounded-[15px] pt-[11rem]">
						<div className="flex flex-wrap justify-start">
							<h2 className="text-2xl">{name}</h2>
						</div>
					</div>
					<div className="card-footer">
						<div className="text-3xl rounded-b-[15px] w-full pb-3 px-5 shadow-md flex justify-end bg-[#fff] text-[#052130] dark:bg-[#052130] dark:text-[#fff]">{price}</div>
					</div>
				</div>

			</div>
			<div className="footerForm grid grid-cols-2 w-full gap-6 mb-6 px-4">
				<button type="button" title='delete' onClick={deleteItem} className="bg-rose-500 text-white py-2 text-lg rounded-[4px] flex justify-center">
					<span className="ml-1">
						<Trash />
					</span>
					حذف
				</button>

				<button type="submit" onClick={ToggleForm} className="bg-blue-600 text-white py-2 text-lg rounded-[4px] flex justify-center">
					<span className="ml-1">
						<EditPencil />
					</span>
					ویرایش
				</button>
			</div>
		</div>
	)
}