const { Client } = require('pg');

const dotenv = require('dotenv');

dotenv.config();
/*
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});*/
// const db = process.env.NODE_ENV ===

const client = new Client({
  connectionString: process.env.DATABASE_URL

});

client.connect();

//const client = await pool.connect();

module.exports = client;
