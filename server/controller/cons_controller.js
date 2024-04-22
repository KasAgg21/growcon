const { json } = require("express");
const { getconsmodel } = require("../models/consmodel")
const path = require('path');

const consmodel = getconsmodel();

function doaddcons(req, resp) {
    const email = req.body.email;
    const doc = new consmodel({ email: email });
    doc.save().then((retDoc) => {
        resp.set(json);
        resp.json({ status: true, retDoc });
    })
}

function dofetchprofile(req, resp) {
    const email = req.query.email;
    consmodel.find({ email: email })
        .then((result) => {
            if (result) {
                resp.set(json);
                resp.json({ status: true, userData: result });
            } else {
                resp.json({ status: false, msg: "User not found" });
            }
        })
        .catch((error) => {
            resp.json({ status: false, msg: error.message });
        });
}

function doupdatecons(req, resp) {
    if (req.files && req.files.ppic) {
        ppicname = req.files.ppic.name + req.body.email;
        var ppicpath = path.join(__dirname, "..", "public", "uploads", ppicname);
        req.files.ppic.mv(ppicpath);
        req.body.ppic = ppicname;
    }

    const email = req.body.email;

    consmodel.updateOne({ email: email }, { $set: req.body })
        .then((result) => {
            resp.set(json);
            if (result.matchedCount === 1) {
                resp.json({ status: true, msg: "Profile Updated" });
            } else {
                resp.json({ status: false, msg: "Profile Invalid or not found" });
            }
        })
        .catch((error) => {
            resp.json({ status: false, msg: "Error updating profile: " + error.message });
        });
}

module.exports = { doaddcons, doupdatecons, dofetchprofile, consmodel };