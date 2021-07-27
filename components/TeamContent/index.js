import styles from '../../styles/Team.module.css';
import { contacts } from '../../data/contacts';

const TeamContent = () => {
  // console.log(contacts);

  return (
    <section className={styles.team}>
      <div className={styles.containerTeam}>
        <h1>KOLEKTIV UMĚLCŮ PŘI&nbsp;REMÍZKU</h1>

        {contacts.map((contact) => {
          return (
            <div className={styles.contact} key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.contact}</p>
              <div className={styles.line}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamContent;
