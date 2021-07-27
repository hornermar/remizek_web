import styles from '../../styles/SimpleProject.module.css';

const ContactContent = () => {
  return (
    <div className={styles.simplePage}>
      <div className={styles.container}>
        <h1>KONTAKT</h1>
        <p>
          Napište nám na{' '}
          <a href="mailto: tpsremizek@gmail.com">tpsremizek@gmail.com</a>
        </p>
        <p>Víte o nějakém ohroženém veřejném zájmu? Napište nám podrobnosti!</p>
        <a href="mailto: verejnost@remizek.org">verejnost@remizek.org</a>
      </div>
    </div>
  );
};

export default ContactContent;
