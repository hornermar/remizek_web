import styles from '../../styles/SimpleProject.module.css';

const ExperienceContent = () => {
  return (
    <div className={styles.simplePage}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>PLATFORMA PRO UMĚLCE NA VOLNÉ NOZE</h1>
          <p>Propojujeme umělce pro ochranu přírody</p>
        </div>
        <p>Chcete se realizovat a získat praxi?</p>
        <p>
          Přidejte se k remízku! Napište na{' '}
          <a href="mailto:spoluprace@remizek.org">spoluprace@remizek.org</a> a
          připojte pár řádku o tom co umíte a co chcete dělat
        </p>
      </div>
    </div>
  );
};

export default ExperienceContent;
