const express = require("express");
const allUser = require("../../controllers/allUser.controller");

const router = express.Router();

router.route("/").get(allUser.getAllUsers);

module.exports = router;
