\c postgres

DROP TABLE IF EXISTS agents;

CREATE TABLE agents
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL
);

DROP TABLE IF EXISTS weapons;

CREATE TABLE weapons
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL
);

DROP TABLE IF EXISTS maps;

CREATE TABLE maps
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL
);