import React  , {useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ToastifyAlert({showTostify}){

  useEffect(() => {
    showTostify === false
      ? void(0)
      : toast.promise(
          showTostify,
          {
            pending: {
              render(){
                return "صبر کنید"
              },
              icon: '⚪',
            },
            success: {
              render({data}){
                if (data) return 'محصول با موفقیت ثبت شد' 
                return data
              },
              icon: '🟢',
            },
            error: {
              render({data}){
                return `نا موفق`
              },
              icon: '🔴',
            }
          }
      )
    
  }, [showTostify]);

  return (
    <>
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}