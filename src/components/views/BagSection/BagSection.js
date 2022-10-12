import s from './BagSection.module.css';
import Tubes from '../../images/Tubes.png';
import Star from './Star/Star';
import Tone from './Tone/Tone';
function BagSection() {
  return (
    <div className={s.container}>
        <ul className={s.list}>
        <div>
            <li className={s.item}>
                <div className={s.arrival}>

                    <p className={s.arrival__text}>New Arrival</p>
              
                </div>
                <div>

                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
                </div>
            </li>
                    <div className={s.Title__block}>
                    <p className={s.title}>Tinted moisturizer</p>
                    <div className={s.Spf}>
                        <p className={s.Spf__text}>SPF 30</p>
                    </div>
            </div>
                   
                    <Tone/>
               <span className={s.sum}>$21.99</span>
               <Star/>   
               <button className={s.button}>add to bag</button>
        </div>



            <div>

            <li className={s.item__2}>
            <div className={s.arrival}>
                <p className={s.arrival__text}>New Arrival</p>
            </div>
                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
            </li>
            <div className={s.Title__block}>
                    <p className={s.title}>Tinted moisturizer</p>
                    <div className={s.Spf}>
                        <p className={s.Spf__text}>SPF 30</p>
                    </div>
            </div>
                <Tone/>
               <span className={s.sum}>$21.99</span> 
               <Star/>
               <button className={s.button}>add to bag</button>
            </div>
            
        <div>
        
            <li className={s.item}>
                <div className={s.arrival}>
                    <p className={s.arrival__text}>New Arrival</p>
                </div>
                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
            </li>
            <div className={s.Title__block}>
                    <p className={s.title}>Tinted moisturizer</p>
                    <div className={s.Spf}>
                        <p className={s.Spf__text}>SPF 30</p>
                    </div>
            </div>
                <Tone/>
  <span className={s.sum}>$21.99</span>
  <Star/>
<button className={s.button}>add to bag</button>
        </div>



            <div>

            <li className={s.item__2}>
            <div className={s.arrival}>
                <p className={s.arrival__text}>New Arrival</p>
            </div>
                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
            </li>
            <div className={s.Title__block}>
                    <p className={s.title}>Tinted moisturizer</p>
                    <div className={s.Spf}>
                        <p className={s.Spf__text}>SPF 30</p>
                    </div>
            </div>
                  <Tone/>
               <span className={s.sum}>$21.99</span>
<Star/>
<button className={s.button}>add to bag</button>
            </div>
        </ul>
      
    </div>
  )
}

export default BagSection