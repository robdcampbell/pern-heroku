const { Pool, Client } = require("pg");
require("dotenv").config();

const devConfig = {
  connectionString: `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // coming from Heroku addons
};

// RENAME!!!!  POOL to CLIENT:
const pool = new Client({
  connectionString: process.env.DATABASE_URL,
});

pool.connect();

pool.query("SELECT * FROM todo", (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
});

module.exports = pool;
