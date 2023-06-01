import { v4 as uuidv4 } from 'uuid';

const getNewId = () => uuidv4();
let contacts = [
  {
    id: getNewId(),
    name: 'bryan',
    phone: 12945934443,
    email: 'bryan@mail.com',
  },
  {
    id: getNewId(),
    name: 'bah',
    phone: 34624740716,
    email: 'bah@mail.com',
  },
];

class ContactRepository {
  async getAll() {
    return contacts;
  }

  async getById(id) {
    return contacts.find(contact => contact.id === id);
  }

  async getByEmail(email) {
    return contacts.find(contact => contact.email === email);
  }

  async add(newContact) {
    const contact = { id: getNewId(), ...newContact };

    contacts.push(contact);

    return contact;
  }

  async update(contact) {
    contacts = contacts.map(c => (c.id === contact.id ? contact : c));
    return contact;
  }

  async delete(id) {
    contacts = contacts.filter(element => element.id === id);
    return true;
  }
}

const contactsRepository = new ContactRepository();
export default contactsRepository;
