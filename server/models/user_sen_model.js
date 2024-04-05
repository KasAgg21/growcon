const mongoose = require('mongoose');

function getusermodel() {

    let user = new mongoose.Schema({

        email: { type: String, required: true, unique: true, index: true },
        pass:String,
        type:String,
        allowence:String
    },
        { versionKey: false }
    )

    const usermodel = mongoose.model("user_sen", user);
    return usermodel;
}
module.exports = { getusermodel }