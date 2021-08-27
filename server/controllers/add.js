const express = require('express');
const db = require('../db/index.js');

const app = express();

module.exports = {
  addAgents: (req, res) => {
    const { name } = req.body;
    db.addAgent(name, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(201);
      res.end();
    })
  },

  addWeapons: (req, res) => {
    const { name } = req.body;
    db.addWeapon(name, (err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(201);
      res.end();
    })
  },
}