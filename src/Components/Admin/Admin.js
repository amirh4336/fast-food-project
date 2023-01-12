// import { Navigate} from "react-router-dom";
import {useState} from 'react';

// Logo
import {User , Settings , LogOut , Plus} from '../../Assets/Logos/Logos';

// Components 
import AddItems from './FormAddItems/AddItems';

export default function Admin() {
  // const [user, setUser] = useState(true);

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }


  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  return(
    <div className="main md:flex justify-end">
        <div className="rightcontent md:w-full bg-slate-100 min-h-screen">
            <nav className="bg-white p-3 relative text-slate-400 flex justify-between shadow-sm items-center">
                <div className="right-nav flex">
                  <button onClick={() => setShowAdd(true)} type="button" title='add' className="flex border p-2 rounded-lg">
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
            <div className="main-content p-10">
                <h1 className="font-bold text-2xl mb-4">Dashboard</h1>
                <div className="items rounded-md border-dashed border-4 h-[28rem]"></div>
                
            </div>
        </div>
        {
          showAdd
          ? <AddItems setShowAdd={setShowAdd}/>
          : ''
        }
        
    </div>
  )
}