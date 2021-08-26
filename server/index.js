const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
// const db = require('../db');

const app = express();
module.exports.app = app;

const PORT = 3000;
app.set('port', PORT);

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/agent', (req, res) => {
  db.getAgents((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post('/agent', (req, res) => {
  db.addAgent((req.body), (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.status(201).json(req.body);
    }
  });
});

app.get('/weapon', (req, res) => {
  db.getWeapons((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  });
});
app.post('/weapon', (req, res) => {
  db.addWeapon((req.body), (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.status(201).json(req.body);
    }
  });
});

app.get('/map', (req, res) => {
  db.getMaps((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  });
});
app.post('/map', (req, res) => {
  db.addMap((req.body), (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.status(201).json(req.body);
    }
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});