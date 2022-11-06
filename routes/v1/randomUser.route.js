const express = require("express");
const userControllers = require("../../controllers/allUser.controller");

// express router import
const router = express.Router();

// product router set and get all data, post new data
router.route("/").get(userControllers.getAllUser);

// export router
module.exports = router;
