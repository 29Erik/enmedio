exports.getCompany = {
    "companyId": {
        presence: true,
        type: "string",
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

exports.createCompany = {
    "name": {
        presence: true,
        type: "string"
    },
    "email": {
        presence: true,
        email: true
    }
};

exports.updateCompany = {
    "companyId": {
        length: {
            is: 24
        },
        presence: true
    },
    "name": {
        type: "string"
    },
    "email": {
        email: true
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
