const Pool = require("pg").Pool;

// const devConfig = {
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "123456",
//   database: "pernstack",
// };
// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const devConfig = `postgresql://postgres:123456@localhost:5432/pernstack`;

// const devConfig = `postgresql://${process.env.PG_USER}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({
  connectionString: devConfig,
});

module.exports = pool;
