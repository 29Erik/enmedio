'use strict';


/**
 * Create an instance of the `Company`
 *
 * companyId String The `CompanyId`
 * no response value expected for this operation
 **/
exports.createCompany = function(companyId) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    resolve();
  });
}


/**
 * Get All companies
 * Get a list of all companies
 *
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * deleted Boolean if the company is deleted (optional)
 * returns List
 **/
exports.getCompanies = function(pageSize,keyPage,deleted) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "XYZ",
  "email" : "xyz@gmail.com",
  "createdOn" : 1593732082206,
  "deleted" : false
}, {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "XYZ",
  "email" : "xyz@gmail.com",
  "createdOn" : 1593732082206,
  "deleted" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds `Company` by Id
 * Get a dingle instance of a `Company`
 *
 * companyId String The `Company` ID
 * deleted Boolean Filter by `Company` (optional)
 * returns List
 **/
exports.getCompany = function(companyId,deleted) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "XYZ",
  "email" : "xyz@gmail.com",
  "createdOn" : 1593732082206,
  "deleted" : false
}, {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "XYZ",
  "email" : "xyz@gmail.com",
  "createdOn" : 1593732082206,
  "deleted" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

