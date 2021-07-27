import styles from '../../styles/SimpleProject.module.css';
import HeaderLink from '../../components/HeaderLink';

const PtakRybak = () => {
  return (
    <>
      <HeaderLink />
      <div className={styles.simplePage}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>
              FILM PTÁK RYBÁK
              <br />
              komu patří voda?{' '}
            </h1>
          </div>
          <p>Tímto filmem zakořenil remízek.</p>
          <p>
            V podzimní kampani 2019 jsme z čistého přesvědčení, že potřebujeme
            veřejnosti přibližovat problémy naší krajiny založili kampaň,
            abychom ...
          </p>
        </div>
      </div>
    </>
  );
};

export default PtakRybak;
