exports.getCompany = {
    "companyId": {
        presence: {
            allowEmpty: false
        },
        length: {
            is: 24
        }
    }
};

exports.getCompanies = {
    "pageSize": {
        presence: true,
        numericality: {
            greaterThanOrEqualTo: 1,
            notGreaterThan: 100
        }
    },
    "keyPage": {
        presence: true,
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
        }
    },
    "query.disabled": {
        type: "boolean"
    },
    "query.deleted": {
        type: "boolean"
    },
    "query.userId": {
        type: "string"
    }
};

exports.createCompany = {
    "name": {
        presence: {
            allowEmpty: false
        },
        type: "string"
    },
    "email": {
        presence: true,
        email: true
    },
    "phone": {
        presence: true,
        type: "string"
    },
    "VATNumber": {
        presence:true,
        type:"string"
    },
    "timezone": {
        presence: true,
        type: "string"
    },
    "currency": {
        presence:true,
        type:"string"
    },
    "imgBase64": {
        type: "string"
    },
    "disabled": {
        type: "boolean"
    },
    "bioSecurity": {
        type: "boolean"
    }
};

exports.updateCompany = {
    "companyId": {
        length: {
            is: 24
        }
    },
    "name": {
        presence: true,
        type: "string"
    },
    "email": {
        email: true
    },
    "phone": {
        type: "string"
    },
    "VATNumber": {
        type: "string"
    },
    "timezone": {
        presence: true,
        type: "string"
    },
    "currency": {
        type: "string"
    },
    "deleted": {
        type: "boolean"
    },
    "disabled": {
        type: "boolean"
    },
    "bioSecurity": {
        type: "boolean"
    },
    "admin": {
        type: "boolean"
    },
    "imgBase64": {
        type: "string"
    }
};

exports.deleteCompany = {
    "companyId": {
        presence: {
            allowEmpty: false
        },
        length: {
            is: 24
        }
    }
};
