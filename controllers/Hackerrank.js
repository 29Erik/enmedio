'use strict';

var utils = require('../utils/writer.js');
var Hackerrank = require('../service/HackerrankService');

module.exports.getArrayManipulation = function getArrayManipulation (req, res, next, A0,A1,A2,B0,B1,B2,K0,K1,K2) {
    Hackerrank.getArrayManipulation(A0,A1,A2,B0,B1,B2,K0,K1,K2)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
