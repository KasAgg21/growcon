const { json } = require("express");
const { getproductmodel } = require("../models/product_detail")
const path = require('path');

const prod_model = getproductmodel();


function doaddprod(req, resp) {
    if (req.files && req.files.item_pic) {
        item_picname = req.files.item_pic.name + req.body.email;
        var item_picpath = path.join(__dirname, "..", "public", "uploads", item_picname);
        req.files.item_pic.mv(item_picpath);
        req.body.item_pic = item_picname;
    }

    const doc = new prod_model(req.body);
    doc.save().then((retDoc) => {
        resp.set(json);
        resp.json({ status: true, retDoc });
    })
}

function dofetchprod(req, resp) {
    const email = req.query.email;
    prod_model.find({ email: email })
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

function dodeleteprod(req, resp) {
    const pid = req.query.id;
    prod_model.deleteOne({ _id: pid })
        .then((result) => {
            resp.json({ status: true, msg: "Deleted", result })
        })
}

function doallfetchprod(req, resp) {
    prod_model.find()
        .then((result) => {
            if (result) {
                resp.set(json);
                resp.json({ status: true, userData: result });
            } else {
                resp.json({ status: false, msg: "Item not found" });
            }
        })
        .catch((error) => {
            resp.json({ status: false, msg: error.message });
        });
}


module.exports = { doaddprod, dofetchprod, dodeleteprod, doallfetchprod };