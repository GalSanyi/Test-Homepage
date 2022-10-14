import s from './Table.module.css';

function Table() {
  return (
    <div className={s.Table__main}>
      <div className={s.table__1}>
        <p className={s.Table__store}>store</p>
        <p className={s.Table__text}>Homepage</p>
        <p className={s.Table__text}>Shop All</p>
        <p className={s.Table__text}>Shade Match</p>
        <p className={s.Table__text}>about hustle</p>
      </div>
      <div className={s.table__2}>
        <p className={s.Table__help}>help</p>
        <p className={s.Table__faq}>faq</p>
        <p className={s.Table__text2}>shipping +</p>
        <p className={s.Table__returns}>returns</p>
        <p className={s.Table__text2}>contact us</p>
      </div>
    </div>
  );
}

export default Table;
