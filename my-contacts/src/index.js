import express from 'express';
import routes from './routes.js';

const port = 3000;
const server = express();

server.use(express.json());
server.use(routes);
server.listen(port, () => console.log(`Server started at http://localhost:${port}`));
