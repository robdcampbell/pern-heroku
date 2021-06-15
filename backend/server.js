const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.port || 5000;

// Middleware
app.use(express.json()); // allows access to req (req.body, req.params, etc...)
app.use(cors()); // allows cross domain resource sharing - proxing between ports 3000 and 5000 here

// app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(express.static(path.join(__dirname, "../frontend/build")));

//process.env.node_env  (will return production or undefined)
if (process.env.NODE_ENV === "production") {
  // serve static content
  app.use(express.static(path.join(__dirname, "../frontend/build")));
}

// ROUTES //
// Get all todos
app.get("/todos", async (req, res) => {
  const allTodos = await pool.query("SELECT * FROM todo ORDER BY todo_id ASC");
  res.status(200).json(allTodos.rows);
});

// get a specific todo
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id=($1)", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.status(200).json(newTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description=($1) WHERE todo_id=($2)",
      [description, id]
    );

    res.status(200).json("Todo was updated!");
  } catch (error) {
    console.error(error);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id=($1)",
      [id]
    );
    res.status(200).json(`Todo: ${id} was deleted!`);
  } catch (error) {
    console.error(error);
  }
});

// Test Route
app.get("/", (req, res) => {
  // Route Litmus Test
  res.status(200).json({ message: "Pterodactyl Ptest" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  //res.status(200).json("Where are we, my friend...");
});

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
