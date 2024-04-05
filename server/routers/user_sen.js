const express = require("express");

const { doadduser, dologin } = require("../controller/user_sen_controller");

const router = express.Router();

router.post("/add-user", doadduser);
router.get("/user-login",dologin);

module.exports = router;