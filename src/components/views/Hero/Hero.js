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
<h1 className={s.tackle__text}>Let’s tackle this together.</h1>
  </div>

  <div className={s.ingredients}>

<h2 className={s.ingredients__text}>Thoughtfully formulated with conscious ingredients.</h2>
  </div>
  </div>
<button className={s.btn}>Learn More</button>
</div>



    </div>
    
  )
}

export default Hero