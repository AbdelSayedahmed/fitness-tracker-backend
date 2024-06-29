const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our fitness app!");
});

const workoutsController = require("./controllers/workoutsController");

app.use("/workouts", workoutsController);

module.exports = app;
