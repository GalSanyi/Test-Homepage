import s from './SmileGirlies.module.css';

function SlimeGirlies() {
  return (
    <div className={s.container}>
      <div className={s.GroupGirlies}>
        <div className={s.text__box}>
          <p className={s.text__AllDay}>
            All Day <br />
            Sun Protection
          </p>
          <button className={s.btn}>Shop Now</button>
        </div>
      </div>
      <div className={s.GroupGirl}>
        <div className={s.text__box}>
          <p className={s.text__AllDay}>
            All Day <br />
            Sun Protection
          </p>
          <button className={s.btn}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default SlimeGirlies;
