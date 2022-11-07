const express = require("express");
const updateASingleUser = require("../../controllers/allUser.controller");

const router = express.Router();

router.route("/").patch(updateASingleUser.updateAUser);

module.exports = router;
