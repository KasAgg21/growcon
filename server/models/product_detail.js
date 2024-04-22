const mongoose = require('mongoose');

function getproductmodel() {

    let product = new mongoose.Schema({

        email: { type: String, required: true, index: true },
        prod_cate: String,
        item_name: String,
        item_pic: String
    },
        { versionKey: false }
    )

    const productmodel = mongoose.model("products", product);
    return productmodel;
}
module.exports = { getproductmodel }