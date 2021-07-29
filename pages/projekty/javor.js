import Link from 'next/link';
import styles from '../../styles/SimpleProject.module.css';

const Javor = () => {
  return (
    <>
      <div className={styles.simplePage}>
        <div className={styles.container}>
          <div>
            <div className={styles.title}>
              <h1>OBČAN JAVOR</h1>
              <p>
                Aktualizovaný playlist videí z dílny Remízek k Javoru Stříbrnému
                na Anenském trojúhelníku
              </p>
            </div>
            <p>
              <Link href="https://www.facebook.com/zachranjavor/videos/1610047322526542/">
                SPOT
              </Link>
            </p>

            <p>
              <Link href="https://www.ceskatelevize.cz/porady/1095913550-nedej-se/221562248430015-zachrana-javoru/?fbclid=IwAR0E2MwfjaiF2oUGF8ziZrJJeHhI5rOCxjSahiKID4ZFoRTijoum6ai28IY">
                Reportáž - NEDEJ SE:
              </Link>
            </p>
          </div>

          <div>
            <p>Remízek audiovizuální projekty k Javoru na Smetanově nábřeží </p>
            <h2>Reportáže</h2>
            <p>(Remízek feat. Zachraň Javor) </p>

            <div>
              <h3>Díl nultý / Poslední nádech svobody</h3>
              <p>
                video:{' '}
                <Link href="https://fb.watch/4v2d_ZIPC5/ ">Facebook</Link> /{' '}
                <Link href="https://youtu.be/CsVcfmd80Po">Youtube</Link>
              </p>
              <p>/ Kamera, střih: Kryštof /</p>
            </div>

            <div>
              <h3>Díl první / Přípravy na kácení </h3>
              <p>
                video: <Link href="https://fb.watch/4v3rxmYkH-/">Facebook</Link>{' '}
                / <Link href="https://youtu.be/sDWskVhi3c8">Youtube</Link>
                <p>
                  / Kamera: Jan Trnka, Zvuk: Kryštof, Střih: Kryštof, Marcel
                  Halcin, Juliana Moska /
                </p>
              </p>
            </div>

            <div>
              <h3>Díl druhý / Bagr vs. Holub</h3>
              <p>
                video:
                <Link href="https://fb.watch/4v3xekd2bT/">Facebook</Link> /{' '}
                <Link href="https://youtu.be/wsMl3SRjnMc">Youtube</Link>
              </p>
              <p>
                / Kamera: Juliana Moska, Adéla Kaiserová, Kryštof, Zvuk: Adéla
                Kaiserová, Matěj Lindner Střih: Rudi Mašata, Kryštof /
              </p>
            </div>

            <div>
              <h3>Díl třetí / Otevřená radnice</h3>
              <p>
                video: <Link href="https://fb.watch/4Oxk_K1vbK/">Facebook</Link>
              </p>
            </div>
          </div>

          <div>
            <h2>Živá vysílání</h2>
            <div>
              <h3>Remízek živě: Bagrování Anenského trojúhelníku</h3>
              <Link href="https://fb.watch/4v3sy6rND0/">
                https://fb.watch/4v3sy6rND0/
              </Link>
              <p>
                / AD: Rudi Mašata, Kamera: Kryštof, Rudi Mašata, Přenos: Kryštof
                /
              </p>
            </div>

            <div>
              <h3>Remízek živě: Hudba pro Javor</h3>
              <Link href="https://fb.watch/4v3IRv-MRm/">
                https://fb.watch/4v3IRv-MRm/
              </Link>

              <p>
                / Kamera: Jan Trnka Nora Štrbová Eduard Germis Juliana Moska ,
                Produkce: Kryštof David , Živý střih, přenos: Kryštof, Stanislav
                Miler , Zvuk: Dejv Prochazka , Světla: Aeaeæ OEn, Asistence:
                Anežka Fišárková Adéla Kaiserová /
              </p>
            </div>

            <div>
              <h3>Na slovo u Javoru</h3>
              <Link href="https://www.facebook.com/TPSremizek/videos/935027017234833 ">
                video
              </Link>
            </div>

            <div>
              <h3>Remízek živě: Mimořádné zasedání zastupitelstva</h3>
              <p>
                / Kamera: Jan Trnka, Michal Vasiľ, Adéla Kaiserová, Kryštof,
                Živý střih: Miky Arsenjev, Tereza Schrijversová, Adéla
                Kaiserová, Přenos: Kryštof, Zvuk: Nicolas Atcheson/
              </p>
              <Link href="https://fb.watch/4v3OxhSKxu/">video 1</Link> /
              <Link href="https://fb.watch/4v3P8Nhs2g/">video 2</Link>
            </div>

            <div>
              <h3>Remízek živě: Javor žije! Koncert pro Javor </h3>
              <Link href="https://fb.watch/4Ox8jGLg4S/">video</Link>
              <p>
                Youtube mix záznamů:{' '}
                <Link href="https://youtu.be/RkarG697pzY ">Kittchen</Link>
              </p>
            </div>

            {/* <div>
              <h3>Politická debata</h3>
              <Link href="https://www.facebook.com/zachranjavor/videos/382899139398764">
                video
              </Link>
            </div> */}

            {/* <div>
              <h3>Magistrát Zastupitelstvo</h3>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Javor;
