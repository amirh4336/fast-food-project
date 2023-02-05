import { Navigate} from "react-router-dom";
import {useState , useContext} from 'react';
import axios from 'axios';

// context
import AuthContext from '../../../Context/AuthContext';

export default function Login() {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(false);
  const authContext = useContext(AuthContext);

  if (user) {
    return <Navigate to="/admin" replace />;
  }
  let toggleAuth = (e) => {
    e.preventDefault();
    // ajax 
    const formData = new FormData();
    formData.append('phone' , phone )
    formData.append('password' , password )

    axios.post(`https://api.pizzafarahzad.ir/v1/users/login` , formData , {headers: { 'content-type': 'multipart/form-data' }})
      .then(response => {
        authContext.dispatch({ type : 'getToken' , payload : { dataToken : response.data.token} })
        setUser(response.data.success)
      })
      .catch(err => {
          if (err.response){
            window.alert(err.response.data.message)
          //do something
          
          }else if(err.request){
          
          //do something else
          
          }else if(err.message){
          
          //do something other than the other two
          
          }
      })
    // 
  }

  return(
    <section className="bg-gradient-to-r from-slate-700 to-cyan-600 w-full px-4 sm:px-8 h-[100vh] flex justify-center items-center font-['Vazir']">
      <form type="submit" onSubmit={toggleAuth} className="bg-white w-full sm:max-w-[380px] flex flex-col items-center p-4 rounded-[15px] shadow-md mb-24">
        <h2 className="text-2xl font-bold mt-4">ورود به پنل</h2>
        <div className="form-content w-full my-8 flex flex-col">

          <label>
            <p className="text-lg">شماره تلفن</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            peer" 
            type="text"
            name="phoneId"
            placeholder="نام کاربری خود را وارد کنید"
            onChange={(e) => {setPhone(e.target.value)}}
            required />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              لطفا شماره تلفن خود را وارد کنید.
            </p>
          </label>

          <label>
            <p className="text-lg">رمز عبور</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer" 
            type="password" placeholder="رمز عبور خود را وارد کنید"
            name="password" 
            onChange={(e) => {setPassword(e.target.value)}}
            required />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              لطفا رمز عبور را وارد کنید.
            </p>
          </label>

        </div>
        <button type="submit" className="bg-sky-600 text-white w-full py-2 text-lg rounded-[4px]">ورود</button>
      </form>
    </section>
  )
}