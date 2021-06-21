const { Pool, Client } = require("pg");
require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
//   host: process.env.PG_HOST,
// };

const devConfig = {
  connectionString: `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // coming from Heroku addons
};

// TEST client AS POOL:
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
