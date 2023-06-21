// eslint-disable-next-line import/no-extraneous-dependencies
import pg from 'pg';

const client = new pg.Client({
  user: 'root',
  password: 'root',
  port: 5432,
  host: 'localhost',
  database: 'my-contacts',
});

try {
  await client.connect();
} catch (err) {
  throw new Error('Failed to connect to database, please check if the server is running and receiving connections');
}

const query = (sql, params) => client.query(sql, params);

export default { query };
