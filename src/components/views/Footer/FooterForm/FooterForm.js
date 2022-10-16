import s from './FooterForm.module.css';
import FormBox from './FormBox/FormBox';
function FooterForm() {
  return (
    <div className={s.FooterForm__container}>
      <p className={s.Content__text}>Connect with us</p>
      <p className={s.second__text}>
        Sign up for email updates on products, launches, and events. Unsubscribe
        anytime.
      </p>
      <FormBox />
    </div>
  );
}

export default FooterForm;
