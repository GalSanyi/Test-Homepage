import s from './Footer.module.css';
import FooterRunningText from './FooterRunningText/FooterRunningText';
import Social from './Social/Social';
import Table from './Table/Table';
import FooterForm from './FooterForm/FooterForm';
function Footer() {
  return (
    <div>
      <FooterRunningText />
      <div className={s.Footer}>
        <div className={s.container}>
          <FooterForm />
          <Table />
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Footer;
