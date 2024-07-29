// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  comments.addComment(name, comment);
  res.json(comments.getComments());
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});