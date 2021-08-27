const express = require('express');
const db = require('../db/index.js');

const app = express();

module.exports = {
  deleteAgents: (req, res) => {
    db.deleteAgent(name, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      console.log('deleted');
      res.end();
    })
  },

  deleteWeapons: (req, res) => {
    db.deleteWeapon(name, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      console.log('deleted');
      res.end();
    })
  },
}