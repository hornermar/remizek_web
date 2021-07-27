import styles from '../../styles/SimpleProject.module.css';
import HeaderLink from '../../components/HeaderLink';

const Folimanka = () => {
  return (
    <>
      <HeaderLink />
      <div className={styles.simplePage}>
        <div className={styles.container}>
          <h1 className={styles.title}>PARK FOLIMAKNA</h1>
          <p>I na Praze 2 se má lít beton a umělá tráva místo parku.</p>
          <p>
            Podporujeme hnutí Za folimanku a sledujeme vývoj situace na místě,
            abychom mohli rozklíčovat, jak funguje arogance tamní radnice, která
            se drží u moci od devadesátých let.{' '}
          </p>
          <p>Podpořte nás. Darujme. </p>
        </div>
      </div>
    </>
  );
};

export default Folimanka;
