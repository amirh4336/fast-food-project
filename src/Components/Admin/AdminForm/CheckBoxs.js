


export default function CheckBoxs({TabsFood , setShowSub , EditDataForm}) {

  const {type , name } = TabsFood ;

  return(
    <label className="flex mr-2">
      { 
        type === EditDataForm.type || EditDataForm.type === 'listPizzaItaly' || EditDataForm.type === 'listPizzaAmerican' 
          ? <input type="radio" onClick={() => type === '' ? setShowSub(true) : setShowSub(false)} name="items" value="apetizer" defaultChecked/>
          : <input type="radio" onClick={() => type === '' ? setShowSub(true) : setShowSub(false)} name="items" value="apetizer" required/>
      }
      <p className="mr-1">
      {name}
      </p>
    </label>
  )
}