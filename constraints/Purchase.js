exports.createProduct = {
    "companyId": {
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
        presence: true,
        type: "string"
    },
    "disabled": {
        presence: true,
        type: "boolean"
    },
    "service": {
        presence: true,
        type: "boolean"
    }
};

exports.deleteProduct = {
    "productId": {
        presence: {
            allowEmpty: false
        },
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getProduct = {
    "productId": {
        presence: {
            allowEmpty: false
        },
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getProducts = {
    "query.companyId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    },
    "query.service": {
        type: "boolean"
    },
    "query.disabled": {
        type: "boolean"
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
        length: {
            is: 24
        },
        type: "string"
    },
    "companyId": {
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
    "disabled": {
        type: "boolean"
    },
    "service": {
        type: "boolean"
    }
};
