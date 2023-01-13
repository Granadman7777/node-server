const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello , My Friend');
})

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});