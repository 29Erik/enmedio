exports.createProduct = {
    "companyId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "name": {
        presence: true,
        type: "string"
    },
    "description": {
        type: "string"
    },
    "price": {
        presence: true,
        type: "integer"
    },
    "stock": {
        presence: true,
        type: "integer"
    }
};

exports.deleteProduct = {
    "productId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getProduct = {
    "productId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getProducts = {
    "companyId": {
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
    "name": {
        type: "string"
    },
    "price": {
        type: "integer"
    },
    "stock": {
        type: "integer"
    },
    "deleted": {
        type: "boolean"
    }
};

exports.getInventoryProducts = {
    "companyId": {
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
    }
};

exports.updateProduct = {
    "productId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "name": {
        type: "string"
    },
    "description": {
        type: "string"
    },
    "price": {
        type: "integer"
    },
    "stock": {
        type: "integer"
    }
};

exports.scoreProduct = {
    "productId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "customerId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "score": {
        type: "integer",
        presence: true
    }
};
