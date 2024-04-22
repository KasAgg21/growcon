const { json } = require("express");
const path = require('path');
const { growermodel } = require("./grower_controller");
const { consmodel } = require("./cons_controller");
const { user_sen_model } = require("./user_sen_controller");

growermodel;
consmodel;
user_sen_model;
let gr;
let cr;
let sen;

async function dofetchallprofile(req, resp) {
    try {
        const gresult = await growermodel.find();
        if (gresult) {
            gr = [...gresult];
        }

        const cresult = await consmodel.find();
        if (cresult) {
            cr = cresult;
        }

        const result = [...gr, ...cr];
        resp.set(json);
        resp.json({ status: true, userData: result });
    } catch (error) {
        resp.json({ status: false, msg: error.message });
    }
}

function dofetchallsen(req, resp) {
    user_sen_model.find({}, { email: 1, type: 1, allowence: 1 })
        .then((sresult) => {
            if (sresult) {
                sen = sresult;
                resp.set(json);
                resp.json({ status: true, userData: sen });
            }
        })
        .catch((error) => {
            resp.json({ status: false, msg: error.message });
        });
}

function dochangeallo(req, resp) {
    const email = req.body.email;
    const alloc = req.body.allowence;
    user_sen_model.updateOne({ email: email }, { $set: { allowence: alloc } })
        .then((result) => {
            if (result.matchedCount === 1) {
                resp.json({ status: true, msg: "Allowance Updated" })
            }
            else {
                resp.json({ status: false, msg: " Invalid or not found" });
            }
        })
        .catch((error) => {
            resp.json({ status: false, msg: "Error updating allowance: " + error.message });
        });
}

module.exports = { dofetchallprofile, dofetchallsen, dochangeallo };