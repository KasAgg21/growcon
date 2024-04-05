const express = require("express");

const { doaddprod, dofetchprod, dodeleteprod } = require("../controller/prod_controller");

const router = express.Router();

router.post("/avail-prod", doaddprod);
router.get("/all-prod", dofetchprod);
router.get("/delete-prod", dodeleteprod);

module.exports = router;