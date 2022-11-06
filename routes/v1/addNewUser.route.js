const express = require("express");
const addNewUsers = require("../../controllers/allUser.controller");

const router = express.Router();

router.route("/").post(addNewUsers.saveNewUser);

module.exports = router;
