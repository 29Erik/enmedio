'use strict';
// Dependencies
const validate = require('validate.js');
const _ = require('lodash');
// Utils
const msg = require('../utils/messages').msg;
const constraints = require('../constraints/Hackerrank');

exports.getArrayManipulation = function(A0,A1,A2,B0,B1,B2,K0,K1,K2) {
    return new Promise(function(resolve, reject) {
        validate.async({
            A0: A0,
            A1: A1,
            A2: A2,
            B0: B0,
            B1: B1,
            B2: B2,
            K0: K0,
            K1: K1,
            K2: K2,
        }, constraints.getArrayManipulation, {format: "flat"})
            .then(() => {
                let array = new Array(10).fill(0);
                array = changeRangeArray(array, A0, B0, K0);
                array = changeRangeArray(array, A1, B1, K1);
                array = changeRangeArray(array, A2, B2, K2);
                let max = _.max(array);
                resolve({value: max});
            })
            .catch(error => reject(msg.format(error[0])));
    });
}

function changeRangeArray(array, minIndex, maxIndex, value) {
    _.forEach(array, (item, $index) => {
        if ($index >= minIndex && $index <= maxIndex) {
            array[$index] += value;
        }
    });
    return array;
}
