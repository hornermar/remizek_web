import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.line}></div>
      <p>
        <a href="mailto: tpsremizek@gmail.com">tpsremizek@gmail.com</a>
      </p>
      <img className={styles.facegookIcon} src="/facebook.svg" />
    </div>
  );
};

export default Footer;
