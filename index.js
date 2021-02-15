const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
