const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

// your credentials
//DATABASE_URL = 'postgres://postgres:1886@127.0.0.1:5432/postgres';
//DATABASE_URL = 'postgres://postgres:1886@127.0.0.1:5432/postgres33'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// a generic query, that executes all queries you send to it
function query(text) {
  return new Promise((resolve, reject) => {
    pool
      .query(text)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err+ 'hhhh');
      });
  });
}

module.exports = {
  query
};