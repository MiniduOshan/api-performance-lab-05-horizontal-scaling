const cluster = require("cluster");
const os = require("os");
const express = require("express");

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary process ${process.pid}`);

  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

} else {
  const app = express();

  app.get("/", (req, res) => {
    res.json({
      message: "Cluster worker response",
      worker: process.pid,
    });
  });

  app.listen(3001, () => {
    console.log(`Worker ${process.pid} started`);
  });
}