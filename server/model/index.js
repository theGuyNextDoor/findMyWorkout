/* eslint-disable import/extensions */
const db = require('../../database');
const { testQuery } = require('../../database/queries.js');

module.exports = {
  selectTest: (callback) => {
    db.query(testQuery, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
        console.log('model');
      }
      db.end();
    });
  },
};
