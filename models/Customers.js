let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    companyId: String,
    name: {type: String, index: true},
    description: String,
    email: String,
    createdOn: Number,
    deleted: Boolean
});

module.exports = mongoose.model('Customer', CustomerSchema);
