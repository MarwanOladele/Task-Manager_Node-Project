const getAllTasks = (req, res) => {
  res.json("Get all tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  const { id } = req.params;
  res.json({id: id});
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
