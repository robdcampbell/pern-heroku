const Pool = require("pg").Pool;

const devConfig = {
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123456",
  database: "pernstack",
};

const pool = new Pool(devConfig);

module.exports = pool;
