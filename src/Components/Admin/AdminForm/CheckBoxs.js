


export default function CheckBoxs({TabsFood , setShowSub , EditDataForm}) {

  const {type , name , id } = TabsFood ;

  return(
    <label className="flex mr-2">
      { 
        type === EditDataForm.type || EditDataForm.type === 'listPizzaItaly' || EditDataForm.type === 'listPizzaAmerican' 
          ? <input type="radio" onClick={() => type === '' ? setShowSub(true) : setShowSub(false)} name="items" value={id} defaultChecked/>
          : <input type="radio" onClick={() => type === '' ? setShowSub(true) : setShowSub(false)} name="items" value={id} required/>
      }
      <p className="mr-1">
      {name}
      </p>
    </label>
  )
}