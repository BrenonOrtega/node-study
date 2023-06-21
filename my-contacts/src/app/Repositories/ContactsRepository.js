import db from '../infrastructure/database/index.js';

const SELECT_QUERY = 'SELECT contacts.id, contacts.name, contacts.phone, contacts.email, categories.name as categoryName, categories.id as categoryId';

class ContactRepository {
  constructor(database) {
    if (!database) throw new Error('database cannot be null or undefined.');

    this.db = database;
  }

  async getAll() {
    const { rows } = await this.db.query(
      `${SELECT_QUERY}
      FROM contacts
      LEFT JOIN categories ON categories.id = contacts.categoryId;`,
    );

    return rows.map(row => ({ ...row }));
  }

  async getById(id) {
    const values = [id];
    const { rows } = await this.db.query(`
      ${SELECT_QUERY}
      FROM contacts
      LEFT JOIN categories ON categories.id = contacts.categoryId
      WHERE contacts.id = $1`, values);

    const mapped = rows.map(row => ({ ...row }));
    return mapped[0];
  }

  async getByEmail(email) {
    const values = [email];
    const { rows } = await this.db.query(`
      ${SELECT_QUERY}
      FROM contacts
      LEFT JOIN categories ON categories.id = contacts.categoryId
      WHERE contacts.email = $1`, values);

    const [mapped] = rows.map(row => ({ ...row }));
    return mapped;
  }

  async add({ name, email, phone, categoryId }) {
    const contact = {
      name,
      phone,
      email,
      categoryId,
    };

    const query = await this.db.query(
      `INSERT INTO contacts (name, phone, email, categoryId)
      VALUES ($1, $2, $3, $4)
      RETURNING id;`,
      Object.values(contact),
    );

    const [queried] = query.rows;
    if (queried) {
      const { id } = queried;
      return { success: true, contact: { id, ...contact } };
    }

    return { success: false, contact: {} };
  }

  async update({ name, email, phone, categoryId, id }) {
    const { rows } = await db.query(
      `UPDATE contacts
       SET name = $1, email=$2, phone=$3, categoryId=$4
       WHERE id = $5`,
      [name, email, phone, categoryId, id],
    );

    const [update] = rows;
    return update;
  }

  async delete(id) {
    const deleteOperation = await db.query('DELETE FROM contacts where id = $1', [id]);
    return deleteOperation;
  }

  async exists({ propertyName, value }) {
    const { rows } = await db.query(
      'SELECT 1 FROM contacts WHERE $1 = $2',
      [propertyName, value],
    );

    const [exists] = rows;

    return Boolean(exists);
  }
}

const contactsRepository = new ContactRepository(db);
export default contactsRepository;
