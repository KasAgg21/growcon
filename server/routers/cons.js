const express = require("express");

const { doupdatecons, dofetchprofile, doaddcons } = require("../controller/cons_controller");
const TokenAuth = require("../authorization/ValidateToken")

const router = express.Router();

router.post("/update-cons", doupdatecons);
router.get("/fetch-cons", dofetchprofile)
router.post("/add-cons", doaddcons)

router.get("/fetch-cons-token", TokenAuth, dofetchprofile);

module.exports = router;