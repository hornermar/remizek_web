import Link from 'next/link';

const Zabak = () => {
  return (
    <div>
      <h1>Mokřad žabák</h1>
      <p>Za posledních šedesát let zmizelo skoro 1 milion hektarů mokřadů.</p>
      <p>
        21 tisíc kilometrů toků řek je stále uzavřen do betonových břehů a
        čtvrtina zemědělských půd je stále odvodňována meliorační drenáží.{' '}
      </p>
      <p>Jeden m2 mokřadu přitom zadrží až 9 tisíc litrů vody.</p>
      <p>
        Mokřady však v Česku nejsou zákonem chráněné oblasti. - Chceme to
        změnit!
      </p>
      <h2>Proč? </h2>
      <p>
        Těchto oáz života dramaticky ubývá. Jsou zásadní i pro zachytávání vody
        a zachytávání CO2. Bohužel, narozdíl od betonu, negenerují politikům a
        developerům zisk. Jak lze zachránit mokřad jsme natáčeli v Lysé nad
        labem.
      </p>
      {/* <p>
        VIDEO TRAILER
        https://drive.google.com/file/d/1-v8rvItYevaD5WuGyYnIHtD0PQLIs_t7/view?usp=sharing
      </p> */}
      <p>
        Na postprodukci tohoto projektu hledáme ko-producenty a financování.
      </p>
      <p>Natáčení probíhalo v létě 2020.</p>
      <h2>Režijní explikace</h2>
      <p>
        Dokumentární seriál z prostředí mokřadu žabák vypráví reálnou událost
        prodeje pozemků města Lysé nad Labem skrze zainteresované strany tohoto
        společensky významného střetu zájmů mezi ochranou přírody a zájmem kraje
        a obce vybudovat středisko pro edukaci dětí. Příběh je vyprávěn skrze
        svědectví opravdových lidí, zastupitelů a občanů města Lysá nad Labem.
      </p>
      <p>
        Klimatická změna tady a teď je tématem prezentovaným zejména jako
        abstraktní problém mediálních a politických půtek nesouvisejících se
        všedním životem. Příběh mokřadu Žabák ukazuje klimatickou změnu v
        konkrétní rovině sucha v naší krajině a jejího zachytávání jako
        konkrétní žitou zkušenost spojenou s naším domovem prostřednictvím
        napínavé snahy obyvatel zachránit konkrétní lokalitu, ke které získávají
        vztah. Pomocí unikátních záběrů získává vztah k tomuto kousku krajiny i
        divák, který uvidí vzácné druhy ptáků a živočichů a umožní tak hlouběji
        pochopit a prožít klimatickou změnu a uvažovat o ní i v kontextu jejich
        domova a obce.
      </p>

      <Link href="/projekty/mokrad-zabak/synopse">Synopse</Link>

      <p>
        Odkaz na{' '}
        <Link href="https://docs.google.com/presentation/d/1Fy3Mw0DRLC1a9NBRQRn8wIKXSad8lJuc7d5Y2jKBMzk/edit?usp=sharing">
          prezentaci projektu
        </Link>
      </p>
    </div>

    // Odkaz na prezentaci projektu: Pitching_CT_11.3._11:30_mokrad_zabak_zvolanek vložit PDF ke stáhnutí.
  );
};

export default Zabak;
