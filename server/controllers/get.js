const express = require('express');
const db = require('../db/index.js');

const app = express();

module.exports = {
  getAgents: (req, res) => {
    db.getAgent((err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },

  getWeapons: (req, res) => {
    db.getWeapon((err, result) => {
      if (err) {
        res.status(400);
        console.log(err);
      }
      res.status(200);
      res.send(result);
    })
  },
}