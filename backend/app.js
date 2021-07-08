const express = require('express');
const cors = require('cors');
const db = require('./database.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'public');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

// routes
app.get('/', (req, res) => {
  res.send('Test: MVP');
});

app.get('/cocktail', (req, res) => {
  db.query('SELECT * FROM cocktails', (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result)
    }
  });
});

app.post('/add', (req, res) => {
  const category = req.body.category;
  db.query('INSERT INTO results (category) VALUES (?)',
  [category],
  (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send('Category Inserted');
    }
  });
});

app.get('/results', (req, res) => {
  db.query('SELECT category, COUNT(*) as "total results" FROM results GROUP BY category ORDER BY "total results" DESC', (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});