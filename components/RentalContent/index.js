import styles from '../../styles/SimpleProject.module.css';

const RentalContent = () => {
  return (
    <div className={styles.simplePage}>
      <div className={styles.container}>
        <h1>RENTAL</h1>
        <p>
          Techniku půjčujeme dle platného ceníku pouze na nekomerční použití.
        </p>
        <p>
          Cenu je možné taky splatit prací v remízku, sazba je fiktivních 150
          Kč/h.
        </p>
      </div>
    </div>
  );
};

export default RentalContent;
