let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Score = {
    customerId: String,
    Score: Number
};

let ProductSchema = new Schema({
    companyId: String,
    name: {type: String, index: true},
    description: String,
    price: Number,
    score: Score,
    createdOn: Number,
    stock: Number,
    deleted: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
