exports.getCompany = {
    "companyId": {
        presence: true,
        type: "string",
        length: {
            is: 24
        }
    },
    "query.name": {
        type: "string"
    },
    "query.email": {
        email: true
    },
    "query.deleted": {
        type: "boolean"
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
