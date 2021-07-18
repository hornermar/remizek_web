import Link from 'next/link';

const MeziOdpady = () => {
  return (
    <div>
      <h1>Mezi odpady online - dokument o odpadovém hospodářství</h1>
      <p>
        „Žijeme v době plastové,“ podotýká hned na úvod jeden z protagonistů.
        Dokument na příkladu města Zlín ukazuje, co toto prohlášení v praxi
        vlastně znamená, a to zdaleka nejen pro tamní občany. Krátký reportážní
        film zachycuje situaci s obtížně recyklovatelnými odpady. Provádí jím
        zaměstnankyně místního magistrátu a pracovníci Technických služeb Zlín,
        které režisér zpovídá a zachycuje přímo při práci. Na lokálních
        souvislostech jihomoravské obce přibližuje technickou, ekonomickou a
        politickou stránku celého problému. K tomu se neodbytně přidávají otázky
        s celospolečenským přesahem, týkající se širší udržitelnosti soudobého
        konzumního stylu života.
      </p>

      <Link href="https://www.csfd.cz/film/716340-mezi-odpady/recenze/">
        ČSFD
      </Link>

      <p>Dokument byl vybrán pro vzdělávání dětí v rámci projektu JSNS!</p>

      <p>
        Kompletní prezentaci najdete{' '}
        <Link href="https://www.jsns.cz/lekce/482625-mezi-odpady">zde</Link>
      </p>

      <p>
        <Link href="https://www.facebook.com/watch/live/?v=3246003868858519&ref=watch_permalink">
          Online premiéra s debatou s majiteli bezobalových obchodů
        </Link>
      </p>
      <p>
        Video:
        <Link href="https://www.youtube.com/watch?v=rK1P1cY1Ifs">
          Mezi Odpady // dokument o odpadovém hospodářství
        </Link>
      </p>
      <p>
        Napsali o nás:{' '}
        <Link href="https://www.advojka.cz/archiv/2020/8/zivocesi-mezi-odpady">
          A2 / Živočeši mezi odpady: České environmentální dokumenty na
          festivalu Jeden svět
        </Link>
      </p>
    </div>
  );
};

export default MeziOdpady;
