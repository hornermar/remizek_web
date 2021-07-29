import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.line}></div>
      <div className={styles.contacts}>
        <p>
          <a href="mailto: tpsremizek@gmail.com">tpsremizek@gmail.com</a>
        </p>
        <Link href="https://www.facebook.com/TPSremizek">
          <img className={styles.facegookIcon} src="/facebook.svg" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
