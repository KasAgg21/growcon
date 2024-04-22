const express = require("express");

const { dofetchallprofile, dofetchallsen, dochangeallo } = require("../controller/admin_controller");

const router = express.Router();

router.get("/fetch-all", dofetchallprofile)
router.get("/fetch-all-sen", dofetchallsen)
router.post("/change-allo", dochangeallo)




module.exports = router;