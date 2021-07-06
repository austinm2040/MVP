const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Test: MVP');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});