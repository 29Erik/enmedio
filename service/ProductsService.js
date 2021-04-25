'use strict';
// Dependencies
const validate = require('validate.js');
const _ = require('lodash');
const MongooseExtras = require("mongoose");
// Models
const Product = require('../models/Product');
const Company = require('../models/Company');
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
            Company.find({
                _id: MongooseExtras.Types.ObjectId(companyId),
                deleted: false
            }).lean()
                .then(company => {
                    if (_.isNil(company)) return reject(msg.not_found("Company"));
                    body.createdOn = Date.now();
                    body.deleted = false;
                    body.score = [];
                    body.averageScore = 0;
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
            Company.find({
                _id: MongooseExtras.Types.ObjectId(companyId),
                deleted: false
            }).lean()
                .then(company => {
                    if (_.isNil(company)) return reject(msg.not_found("Company"));
                    let query = {
                        companyId: companyId,
                        pageSize: pageSize,
                        keyPage: keyPage,
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

