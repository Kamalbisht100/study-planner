const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Study Planner Backend is running!");
});

app.get("/api/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Day 1: Setup Completed", isDone: true },
    { id: 2, title: "Day 2: Connect React with Backend", isDone: false },
  ]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
