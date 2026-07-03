const express = require("express");
const app = express();

// Homepage
app.get("/", (req, res) => {
  res.send("Welcome to the app");
});

// Get all users
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", role: "developer" },
    { id: 2, name: "Bob", role: "designer" },
  ];
  res.json(users);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
