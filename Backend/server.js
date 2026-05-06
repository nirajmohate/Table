const express = require("express");
const cors = require("cors");
const { generateData } = require("./logic");

const app = express();
app.use(cors());

app.get("/api/parental-legacy", (req, res) => {
  const day = parseInt(req.query.day);

  if (!day || day < 1 || day > 31) {
    return res.status(400).json({ error: "Invalid day" });
  }

  const data = generateData(day);
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});