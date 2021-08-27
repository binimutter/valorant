const { Pool, Client } = require('pg');
const { host, user, database, password, port } = require('./config.js');

const pool = new Pool({
  host,
  user,
  database,
  password,
  port,
});

const getAgent = async (callback) => {
  const queryString = 'SELECT * from agents'
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  });
};

const getWeapon = async (callback) => {
  const queryString = 'SELECT * from weapons'
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, res.rows);
  });
};

const addAgent = async (name, callback) => {
  const queryString = `INSERT INTO agents (name) VALUES ('${name}')`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, 'success');
  });
};

const addWeapon = async (name, callback) => {
  const queryString = `INSERT INTO weapons (name) VALUES ('${name}')`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, 'success');
  });
};

const deleteAgent = async (name, callback) => {
  const queryString = `DELETE FROM agents WHERE name = ${name}`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, 'success');
  });
};

const deleteWeapon = async (name, callback) => {
  const queryString = `DELETE FROM weapons WHERE name = ${name}`
  await pool.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
    }
    callback(null, 'success');
  });
};

pool.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  connect: (err, client, done) => {
    return pool.connect(err, client, done);
  },
  pool,
  addAgent: addAgent,
  addWeapon: addWeapon,
  getAgent: getAgent,
  getWeapon: getWeapon,
  deleteAgent: deleteAgent,
  deleteWeapon: deleteWeapon,
};