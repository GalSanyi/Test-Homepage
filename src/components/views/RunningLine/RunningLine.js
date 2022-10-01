import s from './RunningLine.module.css';
import RunningImg from '../../images/imageGirl.png';
import Tubes from '../../images/Tubes.png';

function RunningLine() {
  return (
    <div className={s.marquee__infinite}>
        <div className={s.marquee__block}>

    <div className={s.marquee__content}>
        <img className={s.marquee__img}  src={RunningImg} alt={RunningImg}/>
        <div>
     <p className={s.marquee__text}>Set, Game, Match!</p>
     <p className={s.marquee__text2}>Find the bundle that matches your goal.</p>
     <button className={s.marquee__btn}>Shop NOW</button>
      </div>
        </div>

        <div className={s.marquee__content}>
<div className={s.tubes__background}>
<img className={s.marquee__tubes}  src={Tubes} alt={Tubes}/>
</div>
        <div>
     <p className={s.marquee__text}>Set, Game, Match!</p>
     <p  className={s.marquee__text2}>Find the bundle that matches your goal.</p>
     <button className={s.marquee__btn}>Shop NOW</button>
      </div>
        </div>



    




        <div className={s.marquee__content}>
<div className={s.tubes__background}>
<img className={s.marquee__tubes}  src={Tubes} alt={Tubes}/>
</div>
        <div>
     <p className={s.marquee__text}>Set, Game, Match!</p>
     <p  className={s.marquee__text2}>Find the bundle that matches your goal.</p>
     <button className={s.marquee__btn}>Shop NOW</button>
      </div>
        </div>
        <div className={s.marquee__content}>
<div className={s.tubes__background}>
<img className={s.marquee__tubes}  src={Tubes} alt={Tubes}/>
</div>
        <div>
     <p className={s.marquee__text}>Set, Game, Match!</p>
     <p  className={s.marquee__text2}>Find the bundle that matches your goal.</p>
     <button className={s.marquee__btn}>Shop NOW</button>
      </div>
        </div>

       </div> 
   
    </div>
  )
}

export default RunningLine