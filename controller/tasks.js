const Task = require("../models/tasks");

const getAllTasks = (req, res) => {
  res.json("Get all tasks");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
   res.status(500).json({msg: error})
  }
};

const getTask = (req, res) => {
  const { id } = req.params;
  res.json({ id: id });
};

const updateTask = (req, res) => {
  res.send("edit task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
