// console.log('Task Manager App')
require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.static("./public"));

//middleware
app.use(express.json()); //allows us to use req.body

//routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

const port = 3000;
start();
