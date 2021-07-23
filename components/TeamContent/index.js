import { contacts } from '../../data/contacts';

const TeamContent = () => {
  // console.log(contacts);

  return (
    <div className="container_page">
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

export default TeamContent;
