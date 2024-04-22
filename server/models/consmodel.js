const mongoose = require('mongoose');

function getconsmodel() {

    let cons = new mongoose.Schema({

        email: { type: String, required: true, unique: true, index: true },
        name: String,
        address: String,
        vill_town: String,
        city: String,
        ppic: String,
        phoneno: String,
        state: String,
    },
        { versionKey: false }
    )

    const consmodel = mongoose.model("users_cons", cons);
    return consmodel;
}
module.exports = { getconsmodel }