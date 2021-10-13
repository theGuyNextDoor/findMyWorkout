/* eslint-disable import/extensions */
const { Client } = require('pg');
const { USER } = require('./data/config.js');

const client = new Client({
  user: USER,
  database: 'find_my_workout',
  // password: PASSWORD,
  host: 'localhost',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to PostgreSQL');
  }
});

module.exports = client;

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

// Pool

// const pool = new Pool({
//   user: USER,
//   host: 'localhost:',
//   database: 'find_my_workout',
//   // password: PASSWORD,
//   port: 3000,
// });
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });
