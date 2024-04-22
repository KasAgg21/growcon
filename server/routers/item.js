const express = require("express");

const { doaddprod, dofetchprod, dodeleteprod, doallfetchprod } = require("../controller/prod_controller");
const TokenAuth = require("../authorization/ValidateToken");

const router = express.Router();

router.post("/avail-prod", doaddprod);
router.get("/all-prod", dofetchprod);
router.get("/delete-prod", dodeleteprod);

router.get("/all-prod-token", TokenAuth, dofetchprod);
router.get("/all-all-prod-token", TokenAuth, doallfetchprod);


module.exports = router;