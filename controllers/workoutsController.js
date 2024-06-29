const express = require("express");
const router = express.Router();
const workouts = require("../models/workouts");

router.get("/", (req, res) => {
  res.status(200).send(workouts);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const workout = workouts.find((input) => input.id === +id);
  workout
    ? res.status(200).send(workout)
    : res.status(404).json({ error: `Workout with id: ${id} not found!` });
});

router.post("/", (req, res) => {
  const currentWorkout = { id: workouts.length + 1, ...req.body };
  workouts.push(currentWorkout);
  res.status(201).send(workouts[workouts.length - 1]);
});

module.exports = router;
