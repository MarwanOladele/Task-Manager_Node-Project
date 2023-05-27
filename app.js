const express = require("express");
const app = express();
const tasks = require("./router/tasks");
require("./db/connect");
const connectDB = require("./db/connect");

// middleware
app.use(express.json());

// import task routes
app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();