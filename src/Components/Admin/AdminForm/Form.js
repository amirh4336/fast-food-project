import {useState , useContext} from 'react';

// context
import Context from '../../../Context/Context';

// Components
import DetailsItemForm from './DetailsItemForm';
import CheckBoxs from './CheckBoxs';

//Logo
import {Close} from '../../../Assets/Logos/Logos';



export default function Form({showEditForm}) {
  const {setShowForm  ,EditData} = useContext(Context);

  const listTabFoods =  [
    { id:1 , type:'listApetizer' , name:"پیش غذا" },            
    { id:2 , type:'listDrinks' , name:"نوشیدنی" },
    { id:3 , type:'listSandwich' , name:"ساندویچ" },
    { id:4 , type:'listFried' , name:"سوخاری"  },
    { id:5 , type:'listBurger' , name:"برگر"   },
    { id:6 , type:'' , name:"پیتزا" },
  ]; 

  let EditDataForm = {}

  let listDetails = [{id:1} , {id:2} , {id:3} , {id:4} , {id:5} , {id:6}]
  if (showEditForm ) {

    EditDataForm = EditData

    listDetails = [
      { id:1 , text: `${EditDataForm.detalis[0]}` },            
      { id:2 , text: `${EditDataForm.detalis[1]}` },
      { id:3 , text: `${EditDataForm.detalis[2]}` },
      { id:4 , text: `${EditDataForm.detalis[3]}` },
      { id:5 , text: `${EditDataForm.detalis[4]}` },
      { id:6 , text: `${EditDataForm.detalis[5]}` },
    ]
  }

  const [ShowSub, setShowSub] = useState(
    EditDataForm.type === 'listPizzaItaly' || EditDataForm.type === 'listPizzaAmerican'
    ? true
    : false
  );

  const [ShowDetails, setShowDetails] = useState(showEditForm ? true : false);

  let ToggleForm = () => setShowForm(false);


  return (
    <div className="w-full z-30 backdrop-blur-sm absolute top-0 px-4 sm:px-8 h-full flex justify-center items-center font-['Vazir']">
      <form type="submit" className={`bg-white relative  w-full sm:max-w-[380px] opacity-100 flex flex-col items-center p-4 rounded-[15px] shadow-md ${ShowDetails ? 'mt-[16rem]' : ''}`}>
        <button type="button" title='Close' onClick={ToggleForm} className="w-8 absolute right-2 top-3"><Close /></button>
        <h2 className="text-2xl font-bold mt-4">{`${showEditForm ? 'ویرایش': 'افزودن'} غذا`}</h2>
        <div className="form-content w-full mt-5 mb-8 flex flex-col">

          <div className="checkBoxForm grid grid-cols-3 gap-2 my-5">
            {
              listTabFoods.map(itemTabFood => <CheckBoxs  key={itemTabFood.id} TabsFood={itemTabFood} setShowSub={setShowSub} EditDataForm={EditDataForm} />)
            }
          </div>

          {
            ShowSub
            ? <div className="border rounded-md my-4 flex p-3">
                <label className="flex mr-2">
                  {
                    EditDataForm.type === 'listPizzaItaly'
                    ? <input type="radio" name="subItems" value="italy" defaultChecked/>
                    : <input type="radio" name="subItems" value="italy" required/>
                  }
                  <p className="mr-1">
                    پیتزا ایتالیایی
                  </p>
                </label>
                <label className="flex mr-2">
                  {
                    EditDataForm.type === 'listPizzaAmerican'
                    ? <input type="radio" name="subItems" value="italy" defaultChecked/>
                    : <input type="radio" name="subItems" value="italy" required/>
                  }
                  <p className="mr-1">
                    پیتزا آمریکایی
                  </p>
                </label>
              </div>
            : ''
          }
          
          <label className="mb-4">
            <p className="text-lg">نام غذا</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            peer" 
            type="text" placeholder="نام غذا خود را وارد کنید" defaultValue={EditDataForm.name}  required />
          </label>

          <label className="mb-4">
            <p className="text-lg">قیمت غذا</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            peer" 
            type="text" placeholder="قیمت غذا خود را وارد کنید" defaultValue={EditDataForm.price} required />
          </label>
          
          <label className="mb-4">
            <p className="text-lg mb-2">عکس غذا</p>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </label>

          <label className="col-span-2 mb-2 flex " >
            {
              showEditForm
              ? <input type="checkbox" onClick={() => setShowDetails(!ShowDetails)}  defaultChecked/>
              : <input type="checkbox" onClick={() => setShowDetails(!ShowDetails)} />
            }
            <p className="text-lg mr-2">جزیئات غذا</p>
          </label>

          <div className="DetailsFood grid grid-cols-2 gap-2">
            {
              ShowDetails
              ? listDetails.map(detailFood => <DetailsItemForm key={detailFood.id} details={detailFood}/>)
              : ''
            }
          </div>

        </div>
        <div className="footerForm grid grid-cols-2 w-full gap-3">
          <button type="button" title='Close' onClick={ToggleForm} className="bg-rose-500 text-white py-2 text-lg rounded-[4px]">
            لغو
          </button>

          <button type="submit" className="bg-lime-600 text-white py-2 text-lg rounded-[4px]">
            ثبت
          </button>

        </div>
      </form>
    </div>
  )
}