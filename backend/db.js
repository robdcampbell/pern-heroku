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
  connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`,
};
// const proConfig = {
//   connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`,
// };

const proConfig = {
  connectionString: process.env.DATABASE_URL, // coming from Heroku addons
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

// // TEST//
// const client = new Client(
//   process.env.NODE_ENV === "production" ? proConfig : devConfig
// );
// client.connect();
// client.query("SELECT * FROM todo", (err, res) => {
//   // console.log(err, res.rows);
//   client.end();
// });
//

// module.exports = { pool, client };
module.exports = pool;
