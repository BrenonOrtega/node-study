import categoriesRepository from '../repositories/CategoriesRepository.js';

class CategoryController {
  constructor(repo) {
    if (!repo) throw new Error('repository is required');
    this.repo = repo;
  }

  async index(req, res) {
    const search = req.searchParams;
    const query = await this.repo.getAll(search);
    res.json(query);
  }

  async getById(req, res) {
    const { id } = req.params;
    const query = await this.repo.getById(id);

    if (!query) {
      return res.sendStatus(404);
    }

    return res.json(query);
  }

  async post(req, res) {
    const { name } = req.body;
    const result = await this.repo.add({ name });

    if (result) {
      return res.json(result);
    }

    return res.sendStatus(500);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const result = await this.repo.update(id, { name });

    return res.json(result);
  }

  async delete(req, res) {
    const { id } = req.params;
    const result = await this.repo.delete(id);

    if (result) {
      return res.sendStatus(204);
    }

    return res.sendStatus(400);
  }
}

const categoryController = new CategoryController(categoriesRepository);

export default categoryController;
