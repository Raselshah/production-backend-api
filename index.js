const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const productRouter = require("./routes/products.route");
const app = express();
const port = process.env.PORT || 5000;

// middle wire
app.use(cors());
app.use(express.json());

// database connect
dbConnect();

// route create
app.use("/product", productRouter);

// database run

app.get("/", (req, res) => {
  res.send("db connect haha");
});

app.listen(port, () => {
  console.log(`db connect port ${port}`);
});
