'use strict';
// Dependencies
const validate = require('validate.js');
const _ = require('lodash');
const MongooseExtras = require("mongoose");
// Models
const Product = require('../models/Product');
const Company = require('../models/Company');
const Customer = require('../models/Customers');
// Utils
const msg = require('../utils/messages').msg;
const constraints = require('../constraints/Product');

/**
 * Create an instance of the `Product`
 *
 * companyId String create The `CompanyId`
 * body create The `Product`
 * no response value expected for this operation
 **/
exports.createProduct = function(companyId, body) {
    body.companyId = companyId;
  return new Promise(function(resolve, reject) {
    validate.async(body, constraints.createProduct, {format: "flat"})
        .then(() => {
            Company.findOne({
                _id: MongooseExtras.Types.ObjectId(companyId),
                deleted: false
            }).lean()
                .then(company => {
                    if (_.isNil(company)) return reject(msg.not_found("Company"));
                    body.createdOn = Date.now();
                    body.deleted = false;
                    body.score = [];
                    body.averageScore = 0;
                    body.sold = 0;
                    Product.create(body)
                        .then(() => resolve(msg.ok()))
                        .catch(err => reject(msg.internal_error(err)));
                })
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Deletes a `Product`
 *
 * productId String 
 * no response value expected for this operation
 **/
exports.deleteProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    validate.async({
        productId: productId
    }, constraints.deleteProduct, {format: "flat"})
        .then(() => {
            Product.findByIdAndUpdate(productId, {deleted: true})
                .then(() => resolve(msg.ok()))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Finds `Product` by Id
 * Get a single instance of a `Product`
 *
 * productId String The `product` ID
 * deleted Boolean Filter by `Product` (optional)
 * returns List
 **/
exports.getProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    validate.async({
        productId: productId
    }, constraints.getProduct, {format: "flat"})
        .then(() => {
            Product.findById(productId).lean()
                .then(product => resolve(product))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Get All products
 * Get a list of all `Products`
 *
 * companyId String The `Company` ID
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * name String the product name (optional)
 * price Integer the product price (optional)
 * stock Integer the product stock (optional)
 * deleted Boolean if the product is deleted (optional)
 * returns List
 **/
exports.getProducts = function(companyId, pageSize, keyPage, name, price, stock, deleted) {
  return new Promise(function(resolve, reject) {
    validate.async({
        companyId: companyId,
        pageSize: pageSize,
        keyPage: keyPage,
        name: name,
        price: price,
        stock: stock,
        deleted: deleted
    }, constraints.getProducts, {format: "flat"})
        .then(() => {
            Company.findOne({
                _id: MongooseExtras.Types.ObjectId(companyId),
                deleted: false
            }).lean()
                .then(company => {
                    if (_.isNil(company)) return reject(msg.not_found("Company"));
                    let query = {
                        companyId: companyId,
                        name: name,
                        price: price,
                        stock: stock,
                        deleted: deleted
                    }
                    Product.find(_.omitBy(query, _.isNil)).limit(pageSize).skip(pageSize * (keyPage - 1)).lean()
                        .then(resp=> resolve(resp))
                        .catch(err => reject(msg.internal_error(err)));
                })
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}

/**
 * Get All products
 * Get a list of all `Products`
 *
 * companyId String The `Company` ID
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * returns List
 **/
exports.getInventoryProducts = function(companyId, pageSize, keyPage) {
    return new Promise(function(resolve, reject) {
        validate.async({
            companyId: companyId,
            pageSize: pageSize,
            keyPage: keyPage
        }, constraints.getProducts, {format: "flat"})
            .then(() => {
                Company.findOne({
                    _id: MongooseExtras.Types.ObjectId(companyId),
                    deleted: false
                }).lean()
                    .then(company => {
                        if (_.isNil(company)) return reject(msg.not_found("Company"));
                        let query = {
                            companyId: companyId
                        }
                        Product.find(_.omitBy(query, _.isNil)).limit(pageSize).skip(pageSize * (keyPage - 1)).lean()
                            .then(resp => {
                                let productsResult = [];
                                let final = {
                                    companyId: company.companyId,
                                    companyName: company.name
                                };
                                _.forEach(resp, product => {
                                    let total = product.stock + product.sold;
                                    let stockPercentage = product.stock / total;
                                    let soldPercentage = product.sold / total;
                                    productsResult.push({
                                       productName: product.name,
                                       stock: product.stock,
                                       sold: product.sold,
                                        stockPercentage: `${stockPercentage} %`,
                                        soldPercentage: `${soldPercentage} %`,
                                    });
                                })
                                final.products = productsResult;
                                resolve(final);
                            })
                            .catch(err => reject(msg.internal_error(err)));
                    })
                    .catch(err => reject(msg.internal_error(err)));
            })
            .catch(error => reject(msg.format(error[0])));
    });
}


/**
 * Update `Product`
 * Update `Product`.
 *
 * body ProductRequest Updated `Product` object
 * productId String The `Product` ID
 * no response value expected for this operation
 **/
exports.updateProduct = function(body,productId) {
    body.productId = productId;
  return new Promise(function(resolve, reject) {
    validate.async(body, constraints.updateProduct, {format: "flat"})
        .then(() => {
            Product.findByIdAndUpdate(productId, body)
                .then(() => resolve(msg.ok()))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}

/**
 * Score `Product`
 * Score `Product`.
 *
 * body ProductInventory `Product` object
 * productId String The `Product` ID
 * no response value expected for this operation
 **/
exports.scoreProduct = function(productId, body) {
    body.productId = productId;
    return new Promise(function(resolve, reject) {
        validate.async(body, constraints.scoreProduct, {format: "flat"})
            .then(() => {
                delete body.productId;
                Promise.all([
                    Customer.findById(body.customerId).lean(),
                    Product.findById(productId).lean()
                ])
                    .then(results => {
                        let customer = results[0];
                        let product = results[1];
                        let customerScore = _.find(product.score, {customerId: customer._id});
                        if (!_.isNil(customerScore)) {
                            _.set(_.find(product.score, {customerId: customer._id}), 'score', body.score);
                        } else {
                            if (_.isNil(product.score)) {
                                let arr = [];
                                arr.push(body);
                                product.score = arr;
                            } else {
                                product.score.push(body);
                            }
                        }
                        product.averageScore = 0;
                        _.forEach(product.score, score => product.averageScore += score.score);
                        product.averageScore = product.averageScore / product.score.length;
                        Product.findByIdAndUpdate(product._id, product)
                            .then(() => resolve(msg.ok()))
                            .catch(err => reject(msg.internal_error(err)));
                    })
                    .catch(err => reject(msg.internal_error(err)));
            })
            .catch(error => reject(msg.format(error[0])));
    });
}


