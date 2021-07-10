const mysql = require('mysql');

// const db = mysql.createConnection({
//   user: 'root',
//   host: 'localhost',
//   password: '',
//   database: 'MVP'
// });

const db = mysql.createConnection({
  user: 'b5feb92071e84a',
  host: 'us-cdbr-east-04.cleardb.com',
  password: '1005af49',
  database: 'heroku_aab4e6bf0da38d5'
});

module.exports = db;

// mysql://b5feb92071e84a:1005af49@us-cdbr-east-04.cleardb.com/heroku_aab4e6bf0da38d5?reconnect=true