const express = require("express");
const app = express();

// Homepage - updated for auth
app.get("/", (req, res) => {
  res.send("Welcome - Please log in");
});

// Get all users (now requires auth)
app.get("/users", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const users = [
    { id: 1, name: "Alice", role: "developer" },
    { id: 2, name: "Bob", role: "designer" },
    { id: 3, name: "Charlie", role: "manager" },
  ];
  res.json(users);
});

// Login route
app.post("/login", (req, res) => {
  res.json({ token: "abc123" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Auth server running on port ${PORT}`);
});
