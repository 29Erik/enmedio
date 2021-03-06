'use strict';
// Dependencies
const validate = require('validate.js');
const _ = require('lodash');
const MongooseExtras = require("mongoose");
// Models
const Purchase = require('../models/Purchase');
const Customer = require('../models/Customers');
const Product = require('../models/Product');
// Utils
const msg = require('../utils/messages').msg;
const constraints = require('../constraints/Purchase');

/**
 * Create an instance of the `Product`
 *
 * customerId String The `CustomerId`
 * body to create The `Purchase`
 * no response value expected for this operation
 **/
exports.createPurchase = function(customerId, body) {
    body.customerId = customerId;
    return new Promise(function(resolve, reject) {
        validate.async(body, constraints.createPurchase, {format: "flat"})
            .then(() => {
                Customer.findOne({
                    _id: MongooseExtras.Types.ObjectId(customerId),
                    deleted: false
                }).lean()
                    .then(customer => {
                        if (_.isNil(customer)) return reject(msg.not_found("Customer"));
                        Promise.all(Array.from(
                            body.products, product => Product.findById(product.productId).lean(),
                        ))
                            .then(products => {
                                if (_.isEmpty(products) || _.find(products, _.isNil)) {
                                    return reject(msg.not_found("Products"));
                                }
                                _.forEach(products, (product, $index) => {
                                    if (product.stock <= 0 || product.stock < body.products[$index].qty){
                                        return reject(msg.format("Not enough items"));
                                    }
                                })
                                Promise.all([
                                    Purchase.create(body),
                                    Customer.findByIdAndUpdate(customerId, {purchaseMade: customer.purchaseMade+1})
                                ])
                                    .then(() => {
                                        Promise.all(
                                            Array.from(products, (product, $index) => Product.findByIdAndUpdate(product._id, {sold: product.sold + body.products[$index].qty}))
                                        )
                                            .then(() => resolve(msg.ok()))
                                            .catch(err => reject(msg.internal_error(err)));
                                    })
                                    .catch(err => reject(msg.internal_error(err)));
                            })
                            .catch(err => reject(msg.internal_error(err)));
                    })
                    .catch(err => reject(msg.internal_error(err)));
            })
            .catch(error => reject(msg.format(error[0])));
    });
}


/**
 * Deletes a `Purchase`
 *
 * purchaseId String
 * no response value expected for this operation
 **/
exports.deletePurchase = function(purchaseId) {
    return new Promise(function(resolve, reject) {
        validate.async({
            purchaseId: purchaseId
        }, constraints.deletePurchase, {format: "flat"})
            .then(() => {
                Purchase.findByIdAndDelete(purchaseId)
                    .then(() => resolve(msg.ok()))
                    .catch(err => reject(msg.internal_error(err)));
            })
            .catch(error => reject(msg.format(error[0])));
    });
}


/**
 * Finds `Purchase` by Id
 * Get a single instance of a `Product`
 *
 * purchaseId String The `product` ID
 * returns List
 **/
exports.getPurchase = function(purchaseId) {
    return new Promise(function(resolve, reject) {
        validate.async({
            purchaseId: purchaseId
        }, constraints.getPurchase, {format: "flat"})
            .then(() => {
                Purchase.findById(purchaseId).lean()
                    .then(purchase => resolve(purchase))
                    .catch(err => reject(msg.internal_error(err)));
            })
            .catch(error => reject(msg.format(error[0])));
    });
}


/**
 * Get All purchases
 * Get a list of all `Products`
 *
 * customerId String The `Customer` ID
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * date Integer The timestamp of the purchase
 * returns List
 **/
exports.getPurchases = function(customerId,pageSize,keyPage, startDate, endDate) {
    return new Promise(function(resolve, reject) {
        validate.async({
            customerId: customerId,
            pageSize: pageSize,
            keyPage: keyPage,
            startDate: startDate,
            endDate: endDate
        }, constraints.getPurchases, {format: "flat"})
            .then(() => {
                Customer.findOne({
                    _id: MongooseExtras.Types.ObjectId(customerId),
                    deleted: false
                }).lean()
                    .then(customer => {
                        if (_.isNil(customer)) return reject(msg.not_found("Customer"));
                        let query = {
                            customerId: customerId
                        }
                        if (startDate > endDate) return reject(msg.bad_entry("Start Date", "End Date"));
                        if (!_.isNil(startDate) && !_.isNil(endDate)) {
                            query.date = {$gt: query.startDate, $lt: query.endDate}
                        }
                        Purchase.find(_.omitBy(query, _.isNil)).limit(pageSize).skip(pageSize * (keyPage - 1)).lean()
                            .then(resp=> resolve(resp))
                            .catch(err => reject(msg.internal_error(err)));
                    })
                    .catch(err => reject(msg.internal_error(err)));
            })
            .catch(error => reject(msg.format(error[0])));
    });
}


/**
 * Update `Purchase`
 * Update `Purchase`.
 *
 * body ProductRequest Updated `Product` object
 * purchaseId String The `Purchase` ID
 * no response value expected for this operation
 **/
exports.updatePurchase = function(body,purchaseId) {
    body.purchaseId = purchaseId;
    return new Promise(function(resolve, reject) {
        validate.async(body, constraints.updatePurchase, {format: "flat"})
            .then(() => {
                Purchase.findByIdAndUpdate(purchaseId, body)
                    .then(() => resolve(msg.ok()))
                    .catch(err => reject(msg.internal_error(err)));
            })
            .catch(error => reject(msg.format(error[0])));
    });
}

