'use strict';
// Dependencies
const validate = require('validate.js');
const _ = require('lodash');
// Models
const Company = require('../models/Company');
// Utils
const msg = require('../utils/messages').msg;
const constraints = require('../constraints/Company');

/**
 * Create an instance of the `Company`
 *
 * body to crete The `Company`
 * no response value expected for this operation
 **/
exports.createCompany = function(body) {
  return new Promise(function(resolve, reject) {
    validate.async(body, constraints.createCompany, {format: "flat"})
        .then(() => {
            body.createdOn = Date.now();
            body.deleted = false;
            Company.create(body)
                .then(() => resolve(msg.ok()))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Deletes a `Company`
 *
 * companyId String 
 * no response value expected for this operation
 **/
exports.deleteCompany = function(companyId) {
  return new Promise(function(resolve, reject) {
    validate.async({
        companyId: companyId
    }, constraints.deleteCompany, {format: "flat"})
        .then(() => {
            Company.findByIdAndUpdate(companyId, {deleted: true})
                .then(resp => {
                    if (_.isNil(resp)) return reject(msg.not_found("Company"));
                    resolve(msg.ok());
                })
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Get All companies
 * Get a list of all companies
 *
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * name String of the `Company`
 * email String of the `Company`
 * deleted Boolean if the company is deleted (optional)
 * returns List
 **/
exports.getCompanies = function(pageSize, keyPage, name, email, deleted) {
  return new Promise(function(resolve, reject) {
    validate.async({
        pageSize: pageSize,
        keyPage: keyPage,
        name: name,
        email: email,
        deleted: deleted
    }, constraints.getCompanies, {format: "flat"})
        .then(() => {
            let query = {
                pageSize: pageSize,
                keyPage: keyPage,
                name: name,
                email: email,
                deleted: deleted
            }
            Company.find(_.omitBy(query, _.isNil)).limit(pageSize).skip(pageSize * (keyPage - 1)).lean()
                .then(resp => resolve(resp))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Finds `Company` by Id
 * Get a dingle instance of a `Company`
 *
 * companyId String The `Company` ID
 * returns List
 **/
exports.getCompany = function(companyId) {
  return new Promise(function(resolve, reject) {
    validate.async({
        companyId: companyId
    }, constraints.getCompany, {format: "flat"})
        .then(() => {
            Company.findById(companyId).lean()
                .then(resp => resolve(resp))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}


/**
 * Update `Company`
 * Update `Company`.
 *
 * body CompanyRequest Updated `Company` object
 * companyId String The `Company` ID
 * no response value expected for this operation
 **/
exports.updateCompany = function(body,companyId) {
    body.companyId = companyId;
  return new Promise(function(resolve, reject) {
    validate.async(body, constraints.createCompany, {format: "flat"})
        .then(() => {
            Company.findByIdAndUpdate(companyId, body)
                .then(() => resolve(msg.ok()))
                .catch(err => reject(msg.internal_error(err)));
        })
        .catch(error => reject(msg.format(error[0])));
  });
}

