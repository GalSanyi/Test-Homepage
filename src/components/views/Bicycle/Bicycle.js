import s from './Bicycle.module.css';


function Bicycle() {
  return (
    <div className={s.container}>
    <div className={s.AllDay}>
   <div >
<div className={s.AllDay__box}>

   <p className={s.text__AllDay}>All Day <br/>Sun Protection</p>
</div>
   
    <p className={s.text__spf}>SPF 30 TINTED MOISTURIZER</p>
   

    <div className={s.btn__box}>

    <button className={s.btn}>Shop Now</button>
    </div>
   
   
   </div>

    </div>

    </div>
  )
}

export default Bicycle;