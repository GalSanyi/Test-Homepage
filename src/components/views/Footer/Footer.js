import s from './Footer.module.css';
import FooterRunningText from './FooterRunningText/FooterRunningText';
import Social from './Social/Social';
import Table from './Table/Table';
function Footer() {
  return (
    <div>
      <FooterRunningText />
      <div className={s.Footer}>
        <div className={s.container}>
          <p>Connect with us</p>
          <p>
            Sign up for email updates on products, launches, and events.
            Unsubscribe anytime.
          </p>
          <form>
            <input />
            <button>submit</button>
          </form>
          <Table />
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Footer;
