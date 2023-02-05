

export default function DetailsItemForm({details , setDetails}) {
  const {detailOne, detailTwo , detailThree , detailFour , detailFive , detailSix} = setDetails


  let postDetails = (e) => {
    e.preventDefault();
    switch (details.id) {
      case 1:
        detailOne(e.target.value)
        break;
      case 2:
        detailTwo(e.target.value)
      break;
      case 3:
        detailThree(e.target.value)
        break;
      case 4:
        detailFour(e.target.value)
        break;
      case 5:
        detailFive(e.target.value)
        break;
      case 6:
        detailSix(e.target.value)
        break;
    
      default:
        break;
    }
  }

  return(
    <label className="mb-4">
      <p>{`آیتم ${details.id}`}</p>
      <input className="border w-full p-3 rounded-md mt-2 " 
      type="text" placeholder="آیتم خود را وارد کنید" 
      defaultValue={details.text !== "undefined" ? details.text : ''}
      onChange={postDetails} />
    </label>
  )
}