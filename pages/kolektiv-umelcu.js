import { contacts } from '../data/contacts.js';

const KolektivUmelcu = () => {
  console.log(contacts);

  return (
    <div>
      <h1>Kolektiv umělců při remízku</h1>

      {/* {contacts.map((contact) => {
        <div>{contact.name}</div>;
      })} */}

      <p>Adélka</p>
      <p>text</p>
      <p>fotka</p>
      <p>projekty</p>
      <p>kontakt</p>
    </div>
  );
};

export default KolektivUmelcu;
