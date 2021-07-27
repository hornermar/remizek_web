import Link from 'next/link';
import styles from '../../styles/SimpleProject.module.css';
import HeaderLink from '../../components/HeaderLink';

const VyrustatDoma = () => {
  return (
    <>
      <HeaderLink />
      <div className={styles.simplePage}>
        <div className={styles.container}>
          <h1 className={styles.title}>VYRŮSTAT DOMA</h1>
          <p>
            Podporujeme občanské a profesní hnutí, která nám dávají hluboký
            smysl a tlačí na změnu zastaralých zákonů.
          </p>
          <p>Pomáháme výrobou videí a živých streamů z happeningů.</p>
          <p>
            Nikdy nepřijímáme peníze od spolků samotných - chceme si zachovat
            nezávislost a způsobovat jim další finanční zátěž.
          </p>
          <p>
            Podpořte naše tvůrce a dobrovolníky, kteří na projektech pracují na
            na Darujme!
            {/* Přidat odkaz */}
          </p>
          <p>
            <Link href="https://www.facebook.com/vyrustatdoma/">
              www.facebook.com/vyrustatdoma
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default VyrustatDoma;
