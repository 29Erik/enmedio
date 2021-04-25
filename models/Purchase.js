let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ProductDetail = {
    productId: String,
    Score: Number
};

let PurchaseSchema = new Schema({
    customerId: String,
    value: Number,
    deliveryTime: Number,
    products: [ProductDetail],
    date: Number
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
