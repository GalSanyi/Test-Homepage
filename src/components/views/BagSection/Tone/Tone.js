import s from './Tone.module.css'
import { AiOutlinePlusCircle } from "react-icons/ai";
import ToneCreme from '../../../images/svg/Tone.svg';
import ToneCreme2 from '../../../images/svg/Tone2.svg';
import ToneCreme3 from '../../../images/svg/Tone3.svg';
import ToneCreme4 from '../../../images/svg/Tone4.svg';
import ToneCreme5 from '../../../images/svg/Tone5.svg';

function Tone() {
  return (
    <div>
  
  <label>
<input className={s.label} type='radio'/>
<img src={ToneCreme} alt={ToneCreme}/>
</label>  

  <label>
<input className={s.label} type='radio'/>
<img src={ToneCreme2} alt={ToneCreme2}/>
</label>  

  <label>
<input className={s.label} type='radio'/>
<img src={ToneCreme3} alt={ToneCreme3}/>
</label>  

  <label>
<input className={s.label} type='radio'/>
<img src={ToneCreme4} alt={ToneCreme4}/>
</label>  

  <label>
<input className={s.label} type='radio'/>
<img src={ToneCreme5} alt={ToneCreme5}/>
</label>  



<span>
   
    <AiOutlinePlusCircle/>
</span>



    </div>

  )
}

export default Tone;