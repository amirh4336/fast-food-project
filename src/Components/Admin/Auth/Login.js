


export default function Login() {

  return(
    <section className="bg-gray-800 w-full px-4 sm:px-8 h-[100vh] flex justify-center items-center font-['Vazir']">
      <form type="submit" className="bg-white w-full sm:max-w-[380px] flex flex-col items-center p-4 rounded-[15px] shadow-md mb-24">
        <h2 className="text-2xl font-bold mt-4">ورود به پنل</h2>
        <div className="form-content w-full my-8 flex flex-col">

          <label>
            <p className="text-lg">نام کاربری</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            peer" 
            type="text" placeholder="نام کاربری خود را وارد کنید" required />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              لطفا نام کاربری خود را وارد کنید.
            </p>
          </label>

          <label>
            <p className="text-lg">رمز عبور</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 peer" 
            type="password" placeholder="رمز عبور خود را وارد کنید" name="password" required />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              لطفا رمز عبور را وارد کنید.
            </p>
          </label>

        </div>
        <button type="submit" className="bg-cyan-600 text-white w-full py-2 text-lg rounded-[4px]">ورود</button>
      </form>
    </section>
  )
}