import Link from 'next/link';

const VyrustatDoma = () => {
  return (
    <div>
      <h1>Vyrůstat doma</h1>
      <p>
        Podporujeme občanské a profesní hnutí, která nám dávají hluboký smysl a
        tlačí na změnu zastaralých zákonů.
      </p>
      <p>Pomáháme výrobou videí a živých streamů z happeningů.</p>
      <p>
        Nikdy nepřijímáme peníze od spolků samotných - chceme si zachovat
        nezávislost a způsobovat jim další finanční zátěž.
      </p>
      <p>
        Podpořte naše tvůrce a dobrovolníky, kteří na projektech pracují na na
        Darujme!
        {/* Přidat odkaz */}
      </p>
      <p>
        Stránky vyrůstat doma:{' '}
        <Link href="https://www.facebook.com/vyrustatdoma/">
          www.facebook.com/vyrustatdoma
        </Link>
      </p>
    </div>
  );
};

export default VyrustatDoma;
