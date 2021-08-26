const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'favorites'
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to mySQL!')
  }
});

module.exports = {
  getAgents: (callback) => {
    const queryString = 'select * from agents';
    connection.query(queryString, (err, data) => {
      callback(err, data);
    })
  },

  addAgent: ({ name }, callback) => {
    let queryString = 'insert into agents (name) values (?)';
    const queryArgs = [name];
    connection.query(queryString, queryArgs, (err, data) => {
      callback(err, data);
    });
  },

  getWeapons: (callback) => {
    const queryString = 'select * from weapons';
    connection.query(queryString, (err, data) => {
      callback(err, data);
    })
  },

  addWeapon: ({ name }, callback) => {
    let queryString = 'insert into weapons (name) values (?)';
    const queryArgs = [name];
    connection.query(queryString, queryArgs, (err, data) => {
      callback(err, data);
    });
  },

  getMaps: (callback) => {
    const queryString = 'select * from maps';
    connection.query(queryString, (err, data) => {
      callback(err, data);
    })
  },

  addMap: ({ name }, callback) => {
    let queryStrinqg = 'insert into maps (name) values (?)';
    const queryArgs = [name];
    connection.query(queryString, queryArgs, (err, data) => {
      callback(err, data);
    });
  }
};