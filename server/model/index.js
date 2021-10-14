/* eslint-disable import/extensions */
const db = require('../../database');
const { selectGymExercises } = require('../../database/queries.js');

module.exports = {
  selectGymGroup: (equipment, callback) => {
    db.query(selectGymExercises, [equipment], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data.rows);
      }
    });
  },
};
