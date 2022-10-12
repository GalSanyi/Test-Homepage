import s from './Hero.module.css';
import Mask from '../../images/Mask.png'

function Hero() {
  return (
   
    <div className={s.hero__img}>
<div className={s.hero__mainText}>
<img src={Mask} alt={Mask}/>
</div>



<div className={s.tackle__container}>

<div className={s.tackle}>
  <div className={s.tackle__block} >
<p className={s.tackle__text}>Let’s tackle this together.</p>
  </div>

  <div className={s.ingredients}>

<p className={s.ingredients__text}>Thoughtfully formulated with conscious ingredients.</p>
  </div>
  </div>
<button className={s.btn}>Learn More</button>
</div>



    </div>
    
  )
}

export default Hero