import s from './FooterForm.module.css';

function FooterForm() {
  return (
    <div className={s.FooterForm__container}>
      <p className={s.Content__text}>Connect with us</p>
      <p className={s.second__text}>
        Sign up for email updates on products, launches, and events. Unsubscribe
        anytime.
      </p>
      <form>
        <input />
        <button>submit</button>
      </form>
    </div>
  );
}

export default FooterForm;
