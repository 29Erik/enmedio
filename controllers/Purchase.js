'use strict';

var utils = require('../utils/writer.js');
var Purchase = require('../service/PurchaseService');

module.exports.createPurchase = function createPurchase (req, res, next, body, customerId) {
    Purchase.createPurchase(customerId, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deletePurchase = function deletePurchase (req, res, next, purchaseId) {
    Purchase.deletePurchase(purchaseId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPurchase = function getPurchase (req, res, next, purchaseId) {
    Purchase.getPurchase(purchaseId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getPurchases = function getPurchases (req, res, next, pageSize, keyPage, startDate, endDate, customerId) {
    Purchase.getPurchases(customerId, pageSize, keyPage, startDate, endDate)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updatePurchase = function updatePurchase (req, res, next, body, purchaseId) {
    Purchase.updatePurchase(body, purchaseId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
