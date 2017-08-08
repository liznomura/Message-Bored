/* jshint esversion:6 */
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('hello');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});