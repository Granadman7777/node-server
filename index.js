const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
  console.log('first');
  req.newfield = 'super-important-value'
  next();
}, (req, res, next) => {
   console.log('second');
   next();
}, (req, res, next) => {
   console.log(third);
   console.log(req.newfield);
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});