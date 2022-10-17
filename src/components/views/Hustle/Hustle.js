import s from './Hustle.module.css';
import UserCircle from '../../images/svg/UserCircle.svg';
import BagSimple from '../../images/svg/BagSimple.svg';
import Logo from '../../images/Logo.png';
import Hamburger from 'hamburger-react';
import { HiOutlineSearch } from 'react-icons/hi';
function Hustle() {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <div className={s.container__svg}>
          <div className={s.hamburger}>
            <div className={s.navBar}>
              <ul className={s.navBar__list}>
                <li className={s.navBar__item}>
                  <p>SHOP</p>
                </li>
                <li className={s.navBar__item}>
                  <p>SHADE MATCH</p>
                </li>
                <li className={s.navBar__item}>
                  <p>ABOUT</p>
                </li>
              </ul>
            </div>
            <ul className={s.svg__list}>
              <li className={s.Hamburger}>
                <Hamburger
                  size={20}
                  duration={0.8}
                  color="#000"
                  onToggle={toggle => {
                    if (toggle) {
                      console.log('open menu');
                    } else console.log('close menu');
                  }}
                />
              </li>
              <li className={s.glass}>
                {/* <img src={Glass} alt={Glass} /> */}
                <HiOutlineSearch size={20} />
              </li>
            </ul>
          </div>
        </div>

        <span className={s.text}>
          <img src={Logo} alt={Logo} />
        </span>

        <div className={s.container__svg}>
          <ul className={s.svg__part2}>
            <li className={s.glass2}>
              <HiOutlineSearch size={20} />
            </li>
            <li className={s.UserCircle}>
              <img src={UserCircle} alt={UserCircle} />
            </li>
            <li>
              <img src={BagSimple} alt={BagSimple} />
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default Hustle;
