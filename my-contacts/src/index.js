import 'express-async-errors';
import express from 'express';
import routes from './routes.js';

const port = 3000;
const server = express();

server.use(express.json());
server.use(routes);
server.use((error, _req, res, next) => {
  console.error(error);
  console.error(`Handled error ${error.message}`);
  res.handled = true;
  res.sendStatus(500);
});
server.listen(port, () => console.log(`Server started at http://localhost:${port}`));
