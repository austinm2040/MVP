const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'MVP'
});

module.exports = db;