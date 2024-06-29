const express = require("express");
const router = express.Router();
const workouts = require("../models/workouts");

router.get("/", (res, req) => {
  res.status(200).send(workouts);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const workout = workouts.find((input) => input.id === +id);
  workout
    ? res.statusCode(200).send(workout)
    : res.status(404).json({ error: `Workout with id: ${id} not found!` });
});

module.exports = router;
