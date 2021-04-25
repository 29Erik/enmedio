'use strict';


/**
 * Create an instance of the `Customer`
 *
 * customerId String The `CustoemrId`
 * no response value expected for this operation
 **/
exports.createCustomer = function(customerId) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    resolve();
  });
}


/**
 * Finds `Customer` by Id
 * Get a dingle instance of a `Customer`
 *
 * customerId String The `Customer` ID
 * deleted Boolean Filter by `Customer` (optional)
 * returns List
 **/
exports.getCustomer = function(customerId,deleted) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Erikson",
  "description" : "my customer",
  "email" : "inge.eromero@gmail.com",
  "createdOn" : 1593732082206
}, {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Erikson",
  "description" : "my customer",
  "email" : "inge.eromero@gmail.com",
  "createdOn" : 1593732082206
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get All customers
 * Get a list of all customers
 *
 * companyId String The `Customer` ID
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * deleted Boolean if the customer is deleted (optional)
 * returns List
 **/
exports.getCustomers = function(companyId,pageSize,keyPage,deleted) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Erikson",
  "description" : "my customer",
  "email" : "inge.eromero@gmail.com",
  "createdOn" : 1593732082206
}, {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Erikson",
  "description" : "my customer",
  "email" : "inge.eromero@gmail.com",
  "createdOn" : 1593732082206
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

