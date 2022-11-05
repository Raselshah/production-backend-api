const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const productRouter = require("./routes/v1/products.route");
const app = express();
const port = process.env.PORT || 5000;

// middle wire
app.use(cors());
app.use(express.json());

// database connect
dbConnect();

// route create
app.use("/api/v1/product", productRouter);

// database run

app.get("/", (req, res) => {
  res.send("db connect haha");
});

// api not set
app.all("*", (req, res) => {
  res.send("route is not found");
});
app.listen(port, () => {
  console.log(`db connect port ${port}`);
});
