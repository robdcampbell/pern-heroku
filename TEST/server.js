const express = require("express");
const app = express();
const PORT = 5000;
const pool = require("./db");

app.use(express.json());

app.get("/", async (req, res) => {
  console.log("Simple Jack!");
  const allTodos = await pool.query("SELECT * FROM todo");
  // console.log(allTodos.rows);

  res.status(200).json(allTodos.rows);
});

app.post("/create", async (req, res) => {
  console.log("Bling Blong!");
  const allTodos = await pool.query(
    "INSERT INTO todo(description) VALUES('this is a test description') RETURNING *"
  );
  // console.log(allTodos.rows);

  res.status(200).json(allTodos.rows[0]);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
