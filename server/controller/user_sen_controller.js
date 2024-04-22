const { json } = require("express");
const { getusermodel } = require("../models/user_sen_model")
const { error, time } = require("console");
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
const semver = require("semver")

const user_sen_model = getusermodel();


function doadduser(req, resp) {
    const udoc = new user_sen_model(req.body);
    udoc.save().then((retDoc) => {
        resp.set(json);
        resp.json({ status: true, retDoc });
    })
}

function dologin(req, resp) {
    const email = req.query.email;
    const pass = req.query.pass;
    user_sen_model.find({ email: email, pass: pass })
        .then((result) => {
            //creation of web token
            let currtime = Date()
            console.log(currtime)
            let skey = process.env.SEC_KEY;
            let token = jwt.sign({ result, currtime }, skey)
            if (result[0].allowence == 0) {
                resp.json({ statusu: true, type: result[0].type, jtk: token });
            } else if (result[0].allowence == 2) {
                resp.json({ statusu: "pending" });
            } else if (result[0].allowence == 1) {
                resp.json({ statusu: false });
            }
        })
        .catch((error) => {
            resp.json({ status: "fail", msg: error.message });
        })
}

module.exports = { doadduser, dologin, user_sen_model };