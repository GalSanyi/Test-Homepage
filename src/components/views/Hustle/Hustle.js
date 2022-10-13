import s from './Hustle.module.css';
import Hamburger from '../../images/svg/Hamburger.svg';
import Glass from '../../images/svg/Glass.svg';
import UserCircle from '../../images/svg/UserCircle.svg';
import BagSimple from '../../images/svg/BagSimple.svg';
import Logo from '../../images/Logo.png';

function Hustle() {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <div className={s.container__svg}>
          <div className={s.hamburger}>
            <li>
              <img src={Hamburger} alt={Hamburger} />
            </li>
          </div>

          <div className={s.svg__glass}>
            <li className={s.glass__item}>
              <img src={Glass} alt={Glass} />
            </li>
          </div>
        </div>

        <span className={s.text}>
          <img src={Logo} alt={Logo} />
        </span>

        <div className={s.container__svg}>
          <li className={s.UserCircle}>
            <img src={UserCircle} alt={UserCircle} />
          </li>
          <li>
            <img src={BagSimple} alt={BagSimple} />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Hustle;
