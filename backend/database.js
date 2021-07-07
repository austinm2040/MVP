const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  host: '3306',
  password: '',
  database: 'MVP'
});

module.exports = db;