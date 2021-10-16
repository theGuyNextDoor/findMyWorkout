const model = require('../model');

module.exports = {
  runSelectTest: (req, res) => {
    model.selectTest((err, data) => {
      if (err) {
        res.status(200).send(err);
      } else {
        res.status(200).send(data);
        console.log('controller');
      }
    });
  },
};
