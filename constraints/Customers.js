exports.createCustomer = {
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
    "email": {
        presence: true,
        email: true
    }
};

exports.deleteCustomer = {
    "customerId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getCustomer = {
    "customerId": {
        presence: true,
        length: {
            is: 24
        },
        type: "string"
    }
};

exports.getCustomers = {
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
    "top": {
        type: "integer"
    },
    "name": {
        type: "string"
    },
    "email": {
        email: true
    },
    "deleted": {
        type: "boolean"
    }
};

exports.updateCustomer = {
    "customerId": {
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
    "email": {
        email: true
    }
};
