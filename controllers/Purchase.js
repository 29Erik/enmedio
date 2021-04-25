'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.createProduct = function createProduct (req, res, next, productId) {
    Products.createProduct(productId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deleteProduct = function deleteProduct (req, res, next, productId) {
    Products.deleteProduct(productId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProduct = function getProduct (req, res, next, productId, deleted) {
    Products.getProduct(productId, deleted)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getProducts = function getProducts (req, res, next, companyId, pageSize, keyPage, deleted) {
    Products.getProducts(companyId, pageSize, keyPage, deleted)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateProduct = function updateProduct (req, res, next, body, productId) {
    Products.updateProduct(body, productId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
