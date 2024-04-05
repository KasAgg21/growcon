const mongoose = require('mongoose');

function getgrowermodel() {

    let grower = new mongoose.Schema({

        email: { type: String, required: true, unique: true, index: true },
        name: String,
        address: String,
        vill_town: String,
        city: String,
        category: String,
        adhaarno: String,
        apic: String,
        typee: String,
        pass:String
    },
        { versionKey: false }
    )

    const growermodel = mongoose.model("users", grower);
    return growermodel;
}
module.exports = { getgrowermodel }