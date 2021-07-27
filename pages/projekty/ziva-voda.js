import styles from '../../styles/SimpleProject.module.css';
import HeaderLink from '../../components/HeaderLink';

const ZivaVoda = () => {
  return (
    <>
      <HeaderLink />
      <div className={styles.simplePage}>
        <div className={styles.container}>
          <h1 className={styles.title}>ŽIVÁ VODA</h1>
        </div>
      </div>
    </>
  );
};

export default ZivaVoda;
