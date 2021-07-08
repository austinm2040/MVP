const express = require('express');
const cors = require('cors');
const db = require('./database.js');

const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

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