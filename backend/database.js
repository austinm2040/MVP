const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'MVP'
});

// const db = mysql.createConnection({
//   user: 'b54f636b272175',
//   host: 'us-cdbr-east-04.cleardb.com',
//   password: '831cd4e8',
//   database: 'heroku_85fb4b54a8cbe4c'
// });

module.exports = db;

// mysql://b54f636b272175:831cd4e8@us-cdbr-east-04.cleardb.com/heroku_85fb4b54a8cbe4c?reconnect=true