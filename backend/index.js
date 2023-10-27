const express = require("express");
const { connection } = require("./db");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Kaaryani!");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the Database.");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
  console.log("Listening on port " + PORT);
});
