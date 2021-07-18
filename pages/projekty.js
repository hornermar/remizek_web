// import styles from '../styles/About.module.css';
import Link from 'next/link';

const Projekty = () => {
  return (
    <div>
      <h1>Projekty</h1>
      <p>
        Jsme otevřená audiovizuální platforma pro obnovu biodiverzity a
        rovnoprávnosti.
      </p>
      <ul>
        <li>
          <Link href="/projekty/javor">Občan Javor</Link>
        </li>
        <li>
          <Link href="/projekty/mokrad-zabak">Mokřad žabák</Link>
        </li>
        <li>
          <Link href="/projekty/vyrustat-doma">Vyrůstat doma</Link>
        </li>
        <li>
          <Link href="/projekty/park-folimanka">Park folimanka</Link>
        </li>
        <li>
          <Link href="/projekty/ziva-voda">Živá voda</Link>
        </li>
        <li>
          <Link href="/projekty/ptak-rybak">Film Pták Rybák</Link>
        </li>
        <li>
          <Link href="/projekty/mezi-odpady-online">Mezi odpady online</Link>
        </li>
      </ul>
    </div>
  );
};

export default Projekty;
