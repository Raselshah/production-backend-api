const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const userRouter = require("./routes/v1/randomUser.route");
const allUserRoute = require("./routes/v1/allUser.route");
const addNewUser = require("./routes/v1/addNewUser.route");
const deleteUser = require("./routes/v1/deleteUser.route");
const app = express();
const port = process.env.PORT || 5000;

// middle wire
app.use(cors());
app.use(express.json());

// database connect
dbConnect();

// route create
app.use("/user/random", userRouter);
app.use("/user/all", allUserRoute);
app.use("/user/save", addNewUser);
app.use("/user/delete", deleteUser);

// database run and check api working route
app.get("/", (req, res) => {
  res.send("db connect haha");
});

// user input wrong api then error api working
app.all("*", (req, res) => {
  res.send("route is not found");
});

// api port number show
app.listen(port, () => {
  console.log(`db connect port ${port}`);
});
