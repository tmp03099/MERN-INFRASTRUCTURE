//* Routing Logic

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");

//* POST
router.post("/", usersCtrl.create);
router.post("/", usersCtrl.login);

module.exports = router;
