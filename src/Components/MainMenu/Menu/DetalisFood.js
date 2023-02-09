import {Check} from '../../../Assets/Logos/Logos'



export default function DetalisFood({Detalis}) {
  
  return(
    Detalis === '' 
    ? ''
    : <p className="flex justify-start mr-1 mt-1">
        <span className="text-lime-500 mx-1">
          <Check />
        </span>
        {Detalis}
      </p>
  )
}