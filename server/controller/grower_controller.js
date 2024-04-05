const { json } = require("express");
const { getgrowermodel } = require("../models/growermodel")
const path = require('path');

const growermodel = getgrowermodel();

function doaddgrower(req,resp)
{
    const email=req.body.email;
    const doc=new growermodel({email:email});
    doc.save().then((retDoc)=>{
        resp.set(json);
        resp.json({status:true,retDoc});
    })
}

function dofetchprofile(req, resp) {
    const email = req.query.email;
    growermodel.find({ email: email })
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

function doupdategrower(req, resp) {
    if (req.files && req.files.apic) {
        apicname = req.files.apic.name + req.body.email;
        var apicpath = path.join(__dirname, "..", "public", "uploads", apicname);
        req.files.apic.mv(apicpath);
        req.body.apic = apicname;
    }

    const email = req.body.email;

    growermodel.updateOne({ email: email }, { $set: req.body })
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

module.exports = { doaddgrower, doupdategrower, dofetchprofile };