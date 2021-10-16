const express = require('express');
const controller = require('./controller');

const app = express();
const port = 3000;
app.use(express.static('client/public'));
app.use(express.json());

app.get('/*', (req, res) => {
  controller.runSelectTest(req, res);
});

app.listen(port, () => {
  console.log(`Connected on http://localhost:${port}`);
});
