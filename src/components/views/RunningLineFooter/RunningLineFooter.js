import s from './RunningLineFooter.module.css';

function RunningLine() {
  return (
    <div className={s.marquee__infinite}>
      <div className={s.marquee__block}>
        <div className={s.marquee__content}>
          <div className={s.tubes__background}></div>
        </div>

        <div className={s.marquee__content}>
          <div className={s.tubes__background}></div>
        </div>

        <div className={s.marquee__content}>
          <div className={s.tubes__background}></div>
        </div>
        <div className={s.marquee__content}>
          <div className={s.tubes__background}></div>
        </div>
      </div>
    </div>
  );
}

export default RunningLine;
