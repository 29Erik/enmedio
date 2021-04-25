'use strict';

var utils = require('../utils/writer.js');
var Customers = require('../service/CustomersService');

module.exports.createCustomer = function createCustomer (req, res, next, companyId, body) {
  Customers.createCustomer(companyId, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomer = function deleteCustomer (req, res, next, customerId) {
  Customers.deleteCustomer(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomer = function getCustomer (req, res, next, customerId) {
  Customers.getCustomer(customerId, name, email, deleted)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomers = function getCustomers (req, res, next, companyId, pageSize, keyPage, top, name, email, deleted) {
  Customers.getCustomers(companyId, pageSize, keyPage, top, name, email, deleted)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomer = function updateCustomer (req, res, next, body, customerId) {
  Customers.updateCustomer(body, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
