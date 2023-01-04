import {Check} from '../../Assets/Logos/Logos'



export default function DetalisFood({Detalis}) {
  
  return(
    <div className="flex justify-end mr-3 mt-3">
      {Detalis}
      <div className="text-lime-500 ml-1">
        {Check()}
      </div>
    </div>
  )
}