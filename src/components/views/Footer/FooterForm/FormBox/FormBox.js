import s from './FormBox.module.css';
import './index.css';
function FormBox() {
  return (
    <div className={s.search_wrap}>
      <div className={s.search_box}>
        <input type="text" className={s.input} placeholder="email..." />

        <button className={s.btn}>submit</button>
      </div>
    </div>
  );
}

export default FormBox;
