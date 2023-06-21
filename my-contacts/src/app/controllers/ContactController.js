import contactsRepository from '../repositories/ContactsRepository.js';

class ContactController {
  constructor(contactsRepo) {
    this.contactsRepository = contactsRepo;
  }

  async index(req, res) {
    const contacts = await this.contactsRepository.getAll();
    res.json(contacts);
  }

  async get(req, res) {
    const { id } = req.params;
    const query = await this.contactsRepository.getById(id);

    if (!query) {
      return res.sendStatus(404);
    }

    return res.status(200).json(query);
  }

  async post(req, res) {
    const {
      name, email, phone, categoryId,
    } = req.body;

    const exists = await this.contactsRepository.getByEmail(email);

    if (exists) {
      return res.status(400).json({ error: 'This email is already in use' });
    }

    const newContact = {
      name,
      email,
      phone,
      categoryId,
    };

    const created = await this.contactsRepository.add(newContact);
    return res.status(201).json(created);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, categoryId,
    } = req.body;

    const exists = await this.contactsRepository.getById(id);
    if (!exists) {
      return res.sendStatus(404);
    }

    if (exists.email !== email) {
      const alreadyInUse = await this.contactsRepository.getByEmail(email);

      if (alreadyInUse) {
        return res.status(400).json({ error: 'Email is already taken.' });
      }
    }

    const updated = {
      id, name, email, phone, categoryId,
    };

    await this.contactsRepository.update(updated);
    return res.json(updated);
  }

  async delete(req, res) {
    const { id } = req.params;
    const query = await this.contactsRepository.getById(id);

    if (!query) {
      return res.sendStatus(404);
    }

    await this.contactsRepository.delete(id);
    return res.sendStatus(204);
  }
}

const contactController = new ContactController(contactsRepository);

export default contactController;
