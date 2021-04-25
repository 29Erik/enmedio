'use strict';

var utils = require('../utils/writer.js');
var Company = require('../service/CompanyService');

module.exports.createCompany = function createCompany (req, res, next, body) {
  Company.createCompany(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompany = function deleteCompany (req, res, next, companyId) {
  Company.deleteCompany(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompanies = function getCompanies (req, res, next, pageSize, keyPage, name, email, deleted) {
  Company.getCompanies(pageSize, keyPage, name, email, deleted)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompany = function getCompany (req, res, next, companyId) {
  Company.getCompany(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompany = function updateCompany (req, res, next, body, companyId) {
  Company.updateCompany(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
