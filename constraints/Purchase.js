exports.createPurchase = {
    "customerId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "value": {
        presence: true,
        type: "integer"
    },
    "deliveryTime": {
        presence: true,
        type: "integer"
    },
    "products": {
        presence: true,
        type: "array"
    }
};

exports.deletePurchase = {
    "purchaseId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getPurchase = {
    "purchaseId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getPurchases = {
    "customerId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "pageSize": {
        presence: true,
        numericality: {
            greaterThanOrEqualTo: 1,
            notGreaterThan: 100,
        }
    },
    "keyPage": {
        presence: true,
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
        }
    },
    "startDate": {
        type: "integer"
    },
    "endDate": {
        type: "integer"
    }
};

exports.updatePurchase = {
    "purchaseId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "value": {
        type: "integer"
    },
    "deliveryTime": {
        type: "integer"
    },
    "products": {
        type: "array"
    }
};
