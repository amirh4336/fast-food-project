import {useContext , useState} from 'react';

// context
import Context from '../../../Context/Context';

// Component
import AdminTab from './AdminTabsFoods/AdminTab';

// Logo
import {User , Settings , LogOut , Plus} from '../../../Assets/Logos/Logos';

export default function AdminHeader({ShowSub , setShowSub}) {
  
  const [show, setShow] = useState(false);

  const {setShowEditForm , setShowForm} = useContext(Context);
  let ToggleForm = () =>  {
    setShowEditForm(false);
    setShowForm(true);
  }
  
  return(
    <>
      <nav className="bg-white p-3 fixed w-full z-30 text-slate-400 flex justify-between shadow-sm items-center">
        <div className="right-nav flex">
          <button onClick={ToggleForm} type="button" title='add' className="flex border p-2 rounded-lg">
            <span  className="w-8 h-8 text-slate-600" >
              <Plus />
            </span>
          </button>
        </div>
        <div className="left-nav flex">
          <div className={`${show ? '' : 'hidden'} left-6 top-14  absolute p-4 bg-white w-32 shadow-2xl rounded-md`}>
            <ul>
              <li>
                <button className="flex mb-3">
                  <span className="ml-1"><Settings /></span>
                  تنظیمات
                </button>
              </li>
              <li>
                <button className="flex">
                  <span className="ml-1"><LogOut /></span>
                  خروج 
                </button>
              </li>
            </ul>
          </div>
          <button title="avatar" onClick={() => setShow(!show)} className="flex border p-2 rounded-lg" type="button">
            <span  className="w-8 h-8 text-slate-600" >
              <User />
            </span>
          </button>
        </div>
      </nav>
      <AdminTab Show={ShowSub}  setShow={setShowSub}/>
    </>
  )
}