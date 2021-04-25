'use strict';


/**
 * Create an instance of the `Product`
 *
 * productId String The `ProductId`
 * no response value expected for this operation
 **/
exports.createPurchase = function(purchaseId) {
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
exports.deletePurchase = function(purchaseId) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}


/**
 * Finds `Product` by Id
 * Get a single instance of a `Product`
 *
 * purchaseId String The `product` ID
 * returns List
 **/
exports.getPurchase = function(purchaseId) {
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
 * returns List
 **/
exports.getPurchases = function(companyId,pageSize,keyPage) {
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
exports.updatePurchase = function(body,purchaseId) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

