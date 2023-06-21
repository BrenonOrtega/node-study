CREATE DATABASE "my-contacts";

/* select which database to use and run scripts on.*/
\c my-contacts;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(15),
  email VARCHAR(80) NOT NULL UNIQUE,
  categoryId UUID,
  FOREIGN KEY(categoryId) references categories(id)
);
