const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // coming from Heroku addons
};

const pool = new Pool(devConfig);

module.exports = pool;
