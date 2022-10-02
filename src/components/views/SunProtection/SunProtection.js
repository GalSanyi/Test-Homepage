import s from './SunProtection.module.css'


function SunProtection() {
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

    <div className={s.glow}>
    <div >
<div className={s.AllDay__box}>

   <p className={s.text__AllDay}>Glow On The Go</p>
</div>
   
    <p className={s.text__spf}>WITH OUR SPF 30<br/>TINTED MOISTURIZER</p>
    <div className={s.btn__box}>
    <button className={s.btn}>Shop Now</button>
    </div>
   </div>
    
    </div>
    </div>
  )
}

export default SunProtection