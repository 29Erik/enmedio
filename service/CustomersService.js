'use strict';
// Dependencies
const validate = require('validate.js');
const _ = require('lodash');
const MongooseExtras = require("mongoose");
// Models
const Customer = require('../models/Customers');
const Company = require('../models/Company');
// Utils
const msg = require('../utils/messages').msg;
const constraints = require('../constraints/Customer');

/**
 * Create an instance of the `Customer`
 *
 * companyId String The `CompanyId`
 * body body to The `Customer`
 * no response value expected for this operation
 **/
exports.createCustomer = function(companyId, body) {
    body.companyId = companyId;
  return new Promise(function(resolve, reject) {
    validate.async(body, constraints.createCustomer, {format: "flat"})
        .then(() => {
            body.createdOn = Date.now();
            body.deleted = false;
            body.purchaseMade = 0;
            Company.find({
                _id: MongooseExtras.Types.ObjectId(companyId),
                deleted: false
            }).lean()
                .then(company => {
                    if (_.isNil(company)) return reject(msg.not_found("Company"));
                    Customer.create()
                        .then(() => resolve(msg.ok()))
                        .catch(err => reject(msg.internal_error(err)));
                })
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Deletes a `Customer`
 *
 * customerId String 
 * no response value expected for this operation
 **/
exports.deleteCustomer = function(customerId) {
  return new Promise(function(resolve, reject) {
    validate.async({
        customerId: customerId
    }, constraints.deleteCustomer(), {format: "flat"})
        .then(() => {
            Customer.findByIdAndUpdate(customerId, {deleted: true})
                .then(() => resolve(msg.ok()))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Finds `Customer` by Id
 * Get a dingle instance of a `Customer`
 *
 * customerId String The `Customer` ID
 * returns List
 **/
exports.getCustomer = function(customerId) {
  return new Promise(function(resolve, reject) {
    validate.async({
        customerId: customerId
    }, constraints.getCustomer, {format: "flat"})
        .then(() => {
            Customer.findById(customerId)
                .then(resp => resolve(resp))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Get All customers
 * Get a list of all customers
 *
 * companyId String The `Customer` ID
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * name String the customer name (optional)
 * email String the customer email (optional)
 * deleted Boolean if the customer is deleted (optional)
 * returns List
 **/
exports.getCustomers = function(companyId, pageSize, keyPage, name, email, deleted) {
  return new Promise(function(resolve, reject) {
    validate.async({
        companyId: companyId,
        pageSize: pageSize,
        keyPage: keyPage,
        name: name,
        email: email,
        deleted: deleted
    }, constraints.getCustomers, {format: "flat"})
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
                        email: email,
                        deleted: deleted
                    }
                    Customer.find(_.omitBy(query, _.isNil)).limit(pageSize).skip(pageSize * (keyPage - 1)).lean()
                        .then(resp=> resolve(resp))
                        .catch(err => reject(msg.internal_error(err)));
                })
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Update `Customer`
 * Update `Customer`.
 *
 * body CustomerRequest Updated `Customer` object
 * customerId String The `Customer` ID
 * no response value expected for this operation
 **/
exports.updateCustomer = function(body,customerId) {
    body.customerId = customerId;
  return new Promise(function(resolve, reject) {
    validate.async(body, constraints.createCustomer, {format: "flat"})
        .then(() => {
            Customer.findByIdAndUpdate(customerId, body)
                .then(() => resolve(msg.ok()))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}

