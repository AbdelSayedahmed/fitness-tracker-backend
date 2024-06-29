const express = require("express");
const router = express.Router();
const workouts = require("../models/workouts");

router.get("/", (res, req) => {
  res.statusCode(200).send(workouts);
});

module.exports = router;
