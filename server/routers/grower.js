const express = require("express");

const { doupdategrower, dofetchprofile, doaddgrower, dofetchallprofile } = require("../controller/grower_controller");
const TokenAuth = require("../authorization/ValidateToken")

const router = express.Router();

router.post("/update-grower", doupdategrower);
router.get("/fetch-grower", dofetchprofile)
router.post("/add-grower", doaddgrower)

router.get("/fetch-grower-token", TokenAuth, dofetchprofile);
router.get("/fetch-all-grower-token", TokenAuth, dofetchallprofile);


module.exports = router;