import {useState , useContext } from 'react';

// context
import Context from '../../../Context/Context';
import AuthContext from '../../../Context/AuthContext';
// Components
import DetailsItemForm from './DetailsItemForm';
import CheckBoxs from './CheckBoxs';

//Logo
import {Close} from '../../../Assets/Logos/Logos';

import axios from 'axios';

export default function Form({showEditForm , setShowTostify}) {
  const {setShowForm  ,EditData , dispatch} = useContext(Context);

  const listTabFoods =  [
    { id:'63df4376982d8c2ab58cf9ce' , type:'apetizer' , name:"پیش غذا" },            
    { id:'63df4348982d8c2ab58cf9c8' , type:'drinks' , name:"نوشیدنی" },
    { id:'63df4335982d8c2ab58cf9c5' , type:'sandwich' , name:"ساندویچ" },
    { id:'63df4354982d8c2ab58cf9cb' , type:'fried' , name:"سوخاری"  },
    { id:'63dd215162a982f0fad9beb6' , type:'burger' , name:"برگر"   },
    { id:'63dcdc6c6dcd796b259be4d7' , type:'' , name:"پیتزا" },
  ]; 

  let EditDataForm = {}

  let listDetails = [{id:1} , {id:2} , {id:3} , {id:4} , {id:5} , {id:6}]
  if (showEditForm ) {

    EditDataForm = EditData


    listDetails = [
      { id:1 , text: `${EditDataForm.details[0]}` },            
      { id:2 , text: `${EditDataForm.details[1]}` },
      { id:3 , text: `${EditDataForm.details[2]}` },
      { id:4 , text: `${EditDataForm.details[3]}` },
      { id:5 , text: `${EditDataForm.details[4]}` },
      { id:6 , text: `${EditDataForm.details[5]}` },
    ];
  }

  const [ShowSub, setShowSub] = useState(
    EditDataForm.subCategory?.name === 'Italy' || EditDataForm.subCategory?.name === 'American'
    ? true
    : false
  );

  const [ShowDetails, setShowDetails] = useState(showEditForm ? true : false);

  let ToggleForm = () => setShowForm(false);

  const authContext = useContext(AuthContext);

  // data forms
  const [nameItem, setNameItem] = useState('')
  const [pirceItem, setPriceItem] = useState('')
  const [pathImg, setPathImg] = useState('')
  const [detailOne, setDetailOne] = useState(showEditForm & listDetails[0].text !== 'undefined' ? listDetails[0].text :'')
  const [detailTwo, setDetailTwo] = useState(showEditForm & listDetails[1].text !== 'undefined' ? listDetails[1].text :'')
  const [detailThree, setDetailThree] = useState(showEditForm & listDetails[2].text !== 'undefined' ? listDetails[2].text :'')
  const [detailFour, setDetailFour] = useState(showEditForm & listDetails[3].text !== 'undefined' ? listDetails[3].text :'')
  const [detailFive, setDetailFive] = useState(showEditForm & listDetails[4].text !== 'undefined' ? listDetails[4].text :'')
  const [detailSix, setDetailSix] = useState(showEditForm & listDetails[5].text !== 'undefined' ? listDetails[5].text :'')
  let details = [detailOne ,detailTwo , detailThree , detailFour, detailFive , detailSix]
  let sendData = () => {
    let categoryData = document.querySelector('input[name="items"]:checked').value;
    let subCategoryData = document.querySelector('input[name="subItems"]:checked')?.value;
    // ajax
    const formData = new FormData();
    formData.append('name' , nameItem )
    formData.append('price' , pirceItem )
    for (let index = 0; index < details.length; index++) {
      details[index] === '' ? void(0) : formData.append('details' , details[index])
    }
    formData.append('image' , pathImg)
    formData.append('category' , categoryData )
    if (ShowSub) {formData.append('subCategory' , subCategoryData )}
    // request for create
    setShowTostify(
      axios.post(`https://api.pizzafarahzad.ir/v1/products` , formData , {headers: { 'content-type': 'multipart/form-data' , 'Authorization' : `Bearer ${authContext.dataToken}`}})
        .then(response => {
          dispatch({ type : 'refresh' })
          return  response.data.success
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

  let editData = () => {
    let categoryData = document.querySelector('input[name="items"]:checked').value;
    let subCategoryData = document.querySelector('input[name="subItems"]:checked')?.value;
    // ajax
    const formData = new FormData();
    nameItem === '' ? void(0) : formData.append('name' , nameItem )
    pirceItem === '' ? void(0) : formData.append('price' , pirceItem )
    console.log(details);
    for (let index = 0; index < details.length; index++) {
      details[index] === '' 
      ? void(0) 
      : formData.append('details' , details[index])
    }
    pathImg === '' ? void(0) : formData.append('image' , pathImg)
    categoryData === EditDataForm.category?.id
    ? void(0)
    : formData.append('category' , categoryData )
    ShowSub && EditDataForm.subCategory?.id !== subCategoryData
    ? formData.append('subCategory' , subCategoryData )
    : void(0)
    // request for edit
    setShowTostify(
      axios.put(`https://api.pizzafarahzad.ir/v1/products/${EditDataForm.id}` , formData , {headers: { 'content-type': 'multipart/form-data' , 'Authorization' : `Bearer ${authContext.dataToken}`}})
        .then(response => {
          dispatch({ type : 'refresh' })
          return  response.data.success
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

  let postProduct = e => {
    e.preventDefault();
    !showEditForm ? sendData() : editData()
    ToggleForm()
    
  }

  return (
    <div className="w-full z-30 backdrop-blur-sm absolute top-0 px-4 sm:px-8 h-full flex justify-center items-center font-['Vazir']">
      <form type="submit" onSubmit={postProduct} className={`bg-white relative  w-full sm:max-w-[380px] opacity-100 flex flex-col items-center p-4 rounded-[15px] shadow-md ${ShowDetails ? 'mt-[16rem]' : ''}`}>
        <button type="button" title='Close' onClick={ToggleForm} className="w-8 absolute right-2 top-3"><Close /></button>
        <h2 className="text-2xl font-bold mt-4">{`${showEditForm ? 'ویرایش': 'افزودن'} غذا`}</h2>
        <div className="form-content w-full mt-5 mb-8 flex flex-col">

          <div className="checkBoxForm grid grid-cols-3 gap-2 my-5">
            {
              listTabFoods.map(itemTabFood => <CheckBoxs onChange={() => itemTabFood.id} key={itemTabFood.id} TabsFood={itemTabFood} setShowSub={setShowSub} EditDataForm={EditDataForm} />)
            }
          </div>

          {
            ShowSub
            ? <div className="border rounded-md my-4 flex p-3">
                <label className="flex mr-2">
                  { 
                    EditDataForm.subCategory?.name === 'Italy'
                    ? <input type="radio" name="subItems" value="63df6a43982d8c2ab58cf9ff" defaultChecked/>
                    : <input type="radio" name="subItems" value="63df6a43982d8c2ab58cf9ff" required/>
                  }
                  <p className="mr-1">
                    پیتزا ایتالیایی
                  </p>
                </label>
                <label className="flex mr-2">
                  {
                    EditDataForm.subCategory?.name === 'American'
                    ? <input type="radio" name="subItems" value="63dcdc806dcd796b259be4d9" defaultChecked/>
                    : <input type="radio" name="subItems" value="63dcdc806dcd796b259be4d9" required/>
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
            type="text" placeholder="نام غذا خود را وارد کنید" onChange={(e) => setNameItem(e.target.value)} defaultValue={EditDataForm.name}  required />
          </label>

          <label className="mb-4">
            <p className="text-lg">قیمت غذا</p>
            <input className="border w-full p-3 rounded-md mt-2 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
            disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
            focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            peer" 
            type="text" placeholder="قیمت غذا خود را وارد کنید" onChange={(e) => setPriceItem(e.target.value)} defaultValue={EditDataForm.price} required />
          </label>
          
          <label className="mb-4">
            <p className="text-lg mb-2">عکس غذا</p>
            <input type="file" onChange={(e) => setPathImg(e.target.files[0])} id="avatar" name="avatar" accept="image/png, image/jpeg" />
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
              ? listDetails.map(detailFood => <DetailsItemForm key={detailFood.id} details={detailFood} setDetails={{detailOne: setDetailOne ,
                detailTwo: setDetailTwo , detailThree : setDetailThree,
                detailFour: setDetailFour , detailFive : setDetailFive,
                detailSix: setDetailSix
              }}/>)
              : ''
            }
          </div>

        </div>
        <div className="footerForm grid grid-cols-2 w-full gap-3">
          <button type="button" title='Close' onClick={ToggleForm} className="bg-rose-500 text-white py-2 text-lg rounded-[4px]">
            لغو
          </button>
          
          {
            !showEditForm
            ? <button type="submit" className="bg-lime-600 text-white py-2 text-lg rounded-[4px]">
                ثبت
              </button>
            : <button type="submit" className="bg-blue-700 text-white py-2 text-lg rounded-[4px]">
                ویرایش
              </button>
          }
          

        </div>
      </form>
    </div>
  )
}