


export default function DetailsItemForm({details}) {

  return(
    <label className="mb-4">
      <p className="">{`آیتم ${details.id}`}</p>
      <input className="border w-full p-3 rounded-md mt-2 " 
      type="text" placeholder="آیتم خود را وارد کنید" defaultValue={details.text !== "undefined" ? details.text : ''} />
    </label>
  )
}