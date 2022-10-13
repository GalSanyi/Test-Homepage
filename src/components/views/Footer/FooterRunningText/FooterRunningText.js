import s from './FooterRunningText.module.css';

function FooterRunningText() {
  return (
    <div className={s.marquee}>
      <div className={s.marquee__box}>
        <p className={s.marquee__text}>BEAUTY THAT KEEPS UP.</p>
        <p className={s.marquee__text}>BEAUTY THAT KEEPS UP.</p>
      </div>
    </div>
  );
}

export default FooterRunningText;
