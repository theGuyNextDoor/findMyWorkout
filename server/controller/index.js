const model = require('../model');

module.exports = {
  runSelectGymGroup: (equipment, req, res) => {
    model.selectGymGroup(equipment, (err, data) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};
