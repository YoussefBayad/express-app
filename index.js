const express = require('express');
const path = require('path');

const app = express();
const jsonData = ['its a jason data'];

const myMiddleware = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}://${req.originalUrl}`);
};
app.use(myMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/jsondata', (req, res) => {
  res.json(jsonData);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
