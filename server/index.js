const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const db = require('./db');
const router = require('./routes');

const app = express();
module.exports.app = app;

const PORT = 3000;
app.set('port', PORT);

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));

app.use('/', router);

// app.get('/map', (req, res) => {
//   db.query(`select * from maps;`)
//     .then(results => {
//       res.send(results.rows);
//     })
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(404);
//     })
// });
// app.post('/map', (req, res) => {
//   const { name } = req.body;
//   db.query(`insert into maps (name) values ($1);`, [name])
//     .then(results => {
//       res.send(201);
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(404);
//     })
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});