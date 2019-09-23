const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  console.log('at the home route');
  res.send('hello world!');
})

app.get('/contact', (req, res) => {
  console.log('at the contact route');
  res.send('on the contact page!');
})

app.get('/portfolio', (req, res) => {
  console.log('at the portfolio route');
  res.send('on the portfolio page!');
})


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});