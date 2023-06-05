const express = require("express");
const app = express();
const tasks = require("./router/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
// middleware
app.use(express.static("./public"));
app.use(express.json());

// import task routes
app.use("/api/v1/tasks", tasks);

// not found page middleware
app.use(notFound);

// error handler middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
