import db from '../infrastructure/database/index.js';

class CategoriesRepository {
  constructor(database) {
    if (!database) throw new ReferenceError('Database connection instance cannot be null');
    this.db = database;
  }

  async getAll() {
    const { rows } = await this.db.query('SELECT * FROM categories;');
    return rows;
  }

  async getById(id) {
    const { rows } = await this.db.query('SELECT * FROM categories WHERE id = $1;', [id]);
    const [queried] = rows;
    return queried;
  }

  async add({ name }) {
    const { rows } = await this.db.query(`
      INSERT INTO categories (name)
      VALUES ($1)
      RETURNING id, name;
      `, [name]);

    const [queried] = rows;
    return queried;
  }

  async update(id, { name }) {
    const { rows } = await this.db.query(`
      INSERT INTO categories(name)
      VALUES ($1)
      WHERE id = $2
      RETURNING id;`, [name, id]);

    const [result] = rows;
    return result;
  }

  async delete(id) {
    const deleteOp = await this.db.query(`
      DELETE FROM categories
      WHERE id = $1`, [id]);

    return deleteOp;
  }
}

const categoriesRepository = new CategoriesRepository(db);

export default categoriesRepository;
