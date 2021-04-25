'use strict';

var utils = require('../utils/writer.js');
var Company = require('../service/CompanyService');

module.exports.createCompany = function createCompany (req, res, next, companyId) {
  Company.createCompany(companyId)
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

module.exports.getCompanies = function getCompanies (req, res, next, pageSize, keyPage, deleted) {
  Company.getCompanies(pageSize, keyPage, deleted)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompany = function getCompany (req, res, next, companyId, deleted) {
  Company.getCompany(companyId, deleted)
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
