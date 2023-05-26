const express = require("express");
const app = express();
const tasks = require('./router/tasks')

// middleware
app.use(express.json());

// import task routes
app.use('/api/v1/tasks', tasks)

const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
