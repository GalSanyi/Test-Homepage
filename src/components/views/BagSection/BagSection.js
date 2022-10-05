import s from './BagSection.module.css';
import Tubes from '../../images/Tubes.png';
import MaskGroup from '../../images/svg/Mask group.svg';
import MaskGroup2 from '../../images/svg/Mask group 2.svg'
import MaskGroup3 from '../../images/svg/Mask group3.svg';
import MaskGroup4 from '../../images/svg/Mask group4.svg';
import MaskGroup5 from  '../../images/svg/Mask group5.svg';
import Group from '../../images/svg/Group.svg';
import Star from './Star/Star';
function BagSection() {
  return (
    <div className={s.container}>
  

        <ul className={s.list}>

        <div>

            <li className={s.item}>
                <div className={s.arrival}>
                    <p className={s.arrival__text}>New Arrival</p>
                </div>
                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
            </li>
                    <p className={s.title}>Tinted moisturizer</p>



                    <ul className={s.tone__list}>
               <li className={s.tone__item}>

<span>
    <img src={MaskGroup} alt={MaskGroup}/>
</span>
</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup2} alt={MaskGroup2}/>
</span>


</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup3} alt={MaskGroup3}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup4} alt={MaskGroup4}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup5} alt={MaskGroup5}/>
</span>

</li>
<li >

<span>
    <img src={Group} alt={Group}/>
</span>

</li>
               </ul>
               <span className={s.sum}>$21.99</span>
                    

        </div>



            <div>

            <li className={s.item__2}>
            <div className={s.arrival}>
                <p className={s.arrival__text}>New Arrival</p>
            </div>
                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
            </li>
                    <p className={s.title}>Tinted moisturizer</p>
                    <ul className={s.tone__list}>
               <li className={s.tone__item}>

<span>
    <img src={MaskGroup} alt={MaskGroup}/>
</span>
</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup2} alt={MaskGroup2}/>
</span>


</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup3} alt={MaskGroup3}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup4} alt={MaskGroup4}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup5} alt={MaskGroup5}/>
</span>

</li>
<li >

<span>
    <img src={Group} alt={Group}/>
</span>

</li>
               </ul>
               <span className={s.sum}>$21.99</span> 
            </div>
            
        <div>

            <li className={s.item}>
                <div className={s.arrival}>
                    <p className={s.arrival__text}>New Arrival</p>
                </div>
                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
            </li>
                    <p className={s.title}>Tinted moisturizer</p>
                    <ul className={s.tone__list}>
               <li className={s.tone__item}>

<span>
    <img src={MaskGroup} alt={MaskGroup}/>
</span>
</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup2} alt={MaskGroup2}/>
</span>


</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup3} alt={MaskGroup3}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup4} alt={MaskGroup4}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup5} alt={MaskGroup5}/>
</span>

</li>
<li >

<span>
    <img src={Group} alt={Group}/>
</span>

</li>
               </ul>
  <span className={s.sum}>$21.99</span>
        </div>



            <div>

            <li className={s.item__2}>
            <div className={s.arrival}>
                <p className={s.arrival__text}>New Arrival</p>
            </div>
                <img className={s.Tubes__img} src={Tubes} alt={Tubes}/>
            </li>
                    <p className={s.title}>Tinted moisturizer</p>
                    <ul className={s.tone__list}>
               <li className={s.tone__item}>

<span>
    <img src={MaskGroup} alt={MaskGroup}/>
</span>
</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup2} alt={MaskGroup2}/>
</span>


</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup3} alt={MaskGroup3}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup4} alt={MaskGroup4}/>
</span>

</li>
<li className={s.tone__item}>

<span>
    <img src={MaskGroup5} alt={MaskGroup5}/>
</span>

</li>
<li >

<span>
    <img src={Group} alt={Group}/>
</span>

</li>
               </ul>
               <span className={s.sum}>$21.99</span>
            </div>
      <Star/>
        </ul>
    </div>
  )
}

export default BagSection