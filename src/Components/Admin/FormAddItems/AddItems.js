import {useState} from 'react';

// Components
import DetailsItemForm from './DetailsItemForm';

//Logo
import {Close} from '../../../Assets/Logos/Logos';



export default function AddItems({setShowAdd }) {

  const [ShowSub, setShowSub] = useState(false);

  const [ShowDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full z-30 backdrop-blur-sm absolute top-0 px-4 sm:px-8 h-[100vh] flex justify-center items-center font-['Vazir']">
      <form type="submit" className={`bg-white relative w-full sm:max-w-[380px] opacity-100 flex flex-col items-center p-4 rounded-[15px] shadow-md ${ShowDetails ? 'mt-[15rem]' : ''}`}>
        <button type="button" title='Close' onClick={() => setShowAdd(false)} className="w-8 absolute right-2 top-3"><Close /></button>
        <h2 className="text-2xl font-bold mt-4">افزودن غذا</h2>
        <div className="form-content w-full mt-5 mb-8 flex flex-col">
        <div className="checkBoxForm grid grid-cols-3 gap-2 my-5">
          <label className="flex mr-2">
            <input type="radio" onClick={() => setShowSub(false)} name="items" value="apetizer" required />
            <p className="mr-1">
              پیش غذا
            </p>
          </label>
          <label className="flex mr-2">
            <input type="radio" onClick={() => setShowSub(false)} name="items" value="drinks" required />
            <p className="mr-1">
              نوشیدنی
            </p>
          </label>
          <label className="flex mr-2">
            <input type="radio" onClick={() => setShowSub(false)} name="items" value="fried" required />
            <p className="mr-1">
              سوخاری
            </p>
          </label>
          <label className="flex mr-2">
            <input type="radio" onClick={() => setShowSub(false)} name="items" value="burger" required />
            <p className="mr-1">
            برگر
            </p>
          </label>
          <label className="flex mr-2">
            <input type="radio" name="items" onClick={() => setShowSub(false)} value="sandwich" required />
            <p className="mr-1">
              ساندویچ
            </p>
          </label>
          <label className="flex mr-2">
            <input type="radio" id='pizaa' name="items" onClick={() => setShowSub(true)} value="pizza" required />
            <p className="mr-1">
              پیتزا
            </p>
          </label>
        </div>
        {
          ShowSub
          ? <div className="border rounded-md my-4 flex p-3">
              <label className="flex mr-2">
                <input type="radio" name="subItems" value="italy" required />
                <p className="mr-1">
                  پیتزا ایتالیایی
                </p>
              </label>
              <label className="flex mr-2">
                <input type="radio" name="subItems" value="american" required />
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
            type="text" placeholder="نام غذا خود را وارد کنید" required />
          </label>

          <label className="mb-4">
            <p className="text-lg">قیمت غذا</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            peer" 
            type="text" placeholder="قیمت غذا خود را وارد کنید" required />
          </label>
          <label className="mb-4">
            <p className="text-lg mb-2">عکس غذا</p>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </label>

          <label className="col-span-2 mb-2 flex " >
            <input type="checkbox" onClick={() => setShowDetails(!ShowDetails)} />
            <p className="text-lg mr-2">جزیئات غذا</p>
          </label>
          {
            ShowDetails
            ? <DetailsItemForm />
            : ''
          }
        </div>
        <div className="footerForm grid grid-cols-2 w-full gap-3">
          <button type="button" title='Close' onClick={() => setShowAdd(false)} className="bg-rose-500 text-white py-2 text-lg rounded-[4px]">
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