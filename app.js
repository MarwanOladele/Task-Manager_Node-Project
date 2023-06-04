const express = require("express");
const app = express();
const tasks = require("./router/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require('./middleware/not-found')

// middleware
app.use(express.static("./public"));
app.use(express.json());

// import task routes
app.use("/api/v1/tasks", tasks);

app.use(notFound)


const port = 5000;

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
