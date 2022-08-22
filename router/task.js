const express = require("express");
const router = new express.Router();
const Task = require("../models/Task");
router.get("/", (req, res) => {
  res.send("welcome to innovationm");
});
router.post("/task", async (req, res) => {
  const task = new Task(req.body);
  //   console.log("New", task);

  try {
    const tasks = await task.save();
    res.status(201).send("succesfully");
  } catch (e) {
    res.status(404).send(e);
  }
});
router.get("/taskget", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).send(tasks);
  } catch (e) {
    res.status(500).send(tasks);
  }
});
module.exports = router;
