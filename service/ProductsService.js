'use strict';


/**
 * Create an instance of the `Product`
 *
 * productId String The `ProductId`
 * no response value expected for this operation
 **/
exports.createProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    resolve();
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
exports.getProduct = function(productId,deleted) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Patilla",
  "description" : "Fruta jugosa",
  "score" : [ {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 5
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 4
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 3
  } ],
  "price" : 123486,
  "createdOn" : 1593732082206,
  "stock" : 48,
  "deleted" : false
}, {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Patilla",
  "description" : "Fruta jugosa",
  "score" : [ {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 5
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 4
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 3
  } ],
  "price" : 123486,
  "createdOn" : 1593732082206,
  "stock" : 48,
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
 * Get All products
 * Get a list of all `Products`
 *
 * companyId String The `Company` ID
 * pageSize Long The number of records by page
 * keyPage Long The number of the page
 * deleted Boolean if the product is deleted (optional)
 * returns List
 **/
exports.getProducts = function(companyId,pageSize,keyPage,deleted) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Patilla",
  "description" : "Fruta jugosa",
  "score" : [ {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 5
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 4
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 3
  } ],
  "price" : 123486,
  "createdOn" : 1593732082206,
  "stock" : 48,
  "deleted" : false
}, {
  "_id" : "5efe6bf2bbf35da0d039a6b8",
  "companyId" : "5efe6bf2bbf35da0d039a6b8",
  "name" : "Patilla",
  "description" : "Fruta jugosa",
  "score" : [ {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 5
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 4
  }, {
    "customerId" : "5efe6bf2bbf35da0d039a6b8",
    "score" : 3
  } ],
  "price" : 123486,
  "createdOn" : 1593732082206,
  "stock" : 48,
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
 * Update `Product`
 * Update `Product`.
 *
 * body ProductRequest Updated `Product` object
 * productId String The `Product` ID
 * no response value expected for this operation
 **/
exports.updateProduct = function(body,productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

