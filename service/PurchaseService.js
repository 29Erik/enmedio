'use strict';
// Dependencies
const validate = require('validate.js');
const _ = require('lodash');
// Models
const Purchase = require('../models/Purchase');
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

            })
            .catch(error => reject(msg.format(error[0])));
    });
}


/**
 * Get All purchases
 * Get a list of all `Products`
 *
 * companyId String The `Company` ID
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * date Integer The timestamp of the purchase
 * returns List
 **/
exports.getPurchases = function(companyId,pageSize,keyPage, date) {
    return new Promise(function(resolve, reject) {
        validate.async({
            companyId: companyId,
            pageSize: pageSize,
            keyPage: keyPage,
            date: date
        }, constraints.getPurchases, {format: "flat"})
            .then(() => {

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

            })
            .catch(error => reject(msg.format(error[0])));
    });
}

