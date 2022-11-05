const express = require("express");
const productRoutes = require("../../controllers/products.controller");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("product found");
// });

// router.post("/", (req, res) => {
//   res.send("product save");
// });

router
  .route("/")
  .get(productRoutes.getAllProduct)
  .post(productRoutes.saveAProduct);

router
  .route("/:id")
  .get(productRoutes.getAllProduct)
  .post(productRoutes.saveAProduct);
module.exports = router;
