import s from './Social.module.css';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
function Social() {
  return (
    <>
      <ul className={s.social}>
        <li className={s.social__item}>
          <a href="https://uk-ua.facebook.com/">{<BsFacebook fill="#000" />}</a>
        </li>
        <li className={s.social__item}>
          <a href="https://twitter.com/">{<BsTwitter fill="#000" />}</a>
        </li>
        <li className={s.social__item}>
          <a href="https://www.instagram.com/">{<BsInstagram fill="#000" />}</a>
        </li>
      </ul>
    </>
  );
}

export default Social;
