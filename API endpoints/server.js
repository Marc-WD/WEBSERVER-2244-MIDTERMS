const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Initial dataset
let users = [
  { id: 1, name: "Carmela", email: "mela@gmail.com", age: 25, salary: 25000 },
  { id: 2, name: "Joseph", email: "joe@yahoo.com", age: 30, salary: 45000 },
  { id: 3, name: "James", email: "james@msn.com", age: 35, salary: 30000 },
  { id: 4, name: "John", email: "john@gmail.com", age: 40, salary: 25000 },
  { id: 5, name: "Frank", email: "frank@yahoo.com", age: 45, salary: 45000 },
  { id: 6, name: "Alex", email: "alex@msn.com", age: 21, salary: 33000 },
];

// Root route
app.get("/", (req, res) => {
  res.send(`
    <h2>Available Routes:</h2>
    <ul>
      <li>GET /api/users - Get all users</li>
      <li>GET /api/users/:id - Get user by ID</li>
      <li>GET /api/users?name=NAME - Get user by name (query parameter)</li>
      <li>POST /api/users - Add new user</li>
      <li>DELETE /api/delete/:id - Delete user by ID</li>
    </ul>
  `);
});

// GET all users
app.get("/api/users", (req, res) => {
  // If query parameter exists ?name=
  if (req.query.name) {
    const user = users.find(
      (u) => u.name.toLowerCase() === req.query.name.toLowerCase()
    );
    return res.json(user || { message: "User not found" });
  }
  res.json(users);
});

// GET user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST new user
app.post("/api/users", (req, res) => {
  const { name, email, age, salary } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    age,
    salary,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE user by ID
app.delete("/api/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ message: `User with ID ${id} deleted.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
