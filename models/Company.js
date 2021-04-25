let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CompanySchema = new Schema({
    name: {type: String, index: true},
    email: String,
    createdOn: Number,
    deleted: Boolean
});

module.exports = mongoose.model('Company', CompanySchema);
