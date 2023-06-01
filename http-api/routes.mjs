import PeopleController from "./Controllers/PeopleController.mjs";
import { bodyRequestMiddleware } from "./middleware/bodyRequestMiddleware.mjs";

class RequestHandler {
  constructor(resource, method, handler) {
    this.resource = resource;
    this.method = method;
    this.handler = (req, res) => bodyRequestMiddleware(req, res, handler);
  }
}

const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

const routes = [
  new RequestHandler("/users", HTTP_METHODS.GET, PeopleController.getAllPeople),
  new RequestHandler("/users", HTTP_METHODS.POST, PeopleController.postNewUser),
  new RequestHandler("/users/:id", HTTP_METHODS.GET, PeopleController.getById),
  new RequestHandler("/users/:id", HTTP_METHODS.PUT, PeopleController.updateUser),
  new RequestHandler("/users/:id", HTTP_METHODS.DELETE, PeopleController.deleteUser),
];
  
export default routes;
