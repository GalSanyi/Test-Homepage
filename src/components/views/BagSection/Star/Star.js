import s from './Star.module.css'
import { GrStar } from 'react-icons/gr';
import { useState } from 'react';


function Star() {
 const [rating, setrating] = useState(null)
  return (
    <div>
    {[...Array(5)].map((star, i)=>{
const rantingValue = i + 1

    return (
        <label key={i}>
            <input  type='radio' value={rantingValue} name='rating'/>
     <GrStar className={s.star} size={9}/>
            </label>
    )
       
})}
    
    
    </div>
  )
}

export default Star