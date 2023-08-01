const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('src'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});