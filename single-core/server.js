const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Single core API",
    pid: process.pid,
  });
});

app.listen(3000, () => {
  console.log("Single core API 3000");
});