import { Router } from 'express';
import contactController from './app/controllers/ContactController.js';

const routes = Router();

// passing the function directly causes an error when accessing 'this'
// inside the controller, thats why the sintax of passing a function invoking
// directly the controller methods.
routes.get('/contacts', (req, res) => contactController.index(req, res));
routes.post('/contacts/', (req, res) => contactController.post(req, res));
routes.get('/contacts/:id', (req, res) => contactController.get(req, res));
routes.delete('/contacts/:id', (req, res) => contactController.delete(req, res));
routes.put('/contacts/:id', (req, res) => contactController.update(req, res));
export default routes;
