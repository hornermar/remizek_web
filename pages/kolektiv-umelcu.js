import { contacts } from '../data/contacts.js';

const KolektivUmelcu = () => {
  // console.log(contacts);

  return (
    <div>
      <h1>Kolektiv umělců při remízku</h1>

      {contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <p>Jméno: {contact.name}</p>
            <p>E-mail: {contact.contact}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default KolektivUmelcu;
