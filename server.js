const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const api = require('./server/routes/api');

const port = process.env.PORT || 3000;

// Setting up the things that we need to use : MIDDLEWARE
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
