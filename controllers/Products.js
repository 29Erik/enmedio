'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.createProduct = function createProduct (req, res, next, body, companyId) {
  Products.createProduct(companyId, body)
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

module.exports.getProduct = function getProduct (req, res, next, productId) {
  Products.getProduct(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProducts = function getProducts (req, res, next, pageSize, keyPage, name, price, stock, deleted, companyId) {
  Products.getProducts(companyId, pageSize, keyPage, name, price, stock, deleted)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInventoryProducts = function getInventoryProducts (req, res, next, pageSize, keyPage, companyId) {
    Products.getInventoryProducts(companyId, pageSize, keyPage)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.scoreProduct = function scoreProduct (req, res, next, body, productId) {
    Products.scoreProduct(productId, body)
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
