import styles from '../../styles/Philosophy.module.css';

const PhilosophyContent = () => {
  return (
    <section className={styles.philosophy}>
      <div className={styles.containerPhilosophy}>
        <h1>FILOSOFIE SPOLKU</h1>
        <p>
          Jsme hierarchičtí. Uznáváme rovnoprávnost a smutek z probíhající
          klimatické krize měníme na činy - myslíme globálně, jednáme lokálně.
          Společně můžeme ovlivnit mnohé.
        </p>
        <button>Stanovy</button>
      </div>
    </section>
  );
};

export default PhilosophyContent;
