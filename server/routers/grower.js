const express = require("express");

const { doupdategrower, dofetchprofile, doaddgrower } = require("../controller/grower_controller");

const router = express.Router();

router.post("/update-grower", doupdategrower);
router.get("/fetch-grower", dofetchprofile)
router.post("/add-grower",doaddgrower)

module.exports = router;