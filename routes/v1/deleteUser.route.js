const express = require("express");
const deleteUserWithId = require("../../controllers/allUser.controller");

const router = express.Router();

router.route("/:id").delete(deleteUserWithId.deleteUser);

module.exports = router;
