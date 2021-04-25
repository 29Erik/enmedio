exports.msg = {
    ok: function () {
        return {
            code: 200,
            message: "Successful operation"
        }
    },
    ok_with_warns: function (warning) {
        return {
            code: 200,
            message: `Successful operation, but ${warning}`
        }
    }, //HTTP 200
    ok_user_already_exists: function () {
        return {
            code: 200,
            message: `Successful operation, company linked this User w/ already existing account`
        }
    }, //HTTP 200
    format: function (error) {
        return {
            code: 400,
            message: error.toString()
        }
    }, //HTTP 400
    not_found: function (object) {
        return {
            code: 404,
            message: `The ${object} does not exist`
        }
    }, //HTTP 404
    internal_error: function (error) {
        return {
            message: "Internal ERROR",
            trace: error
        }
    }, //HTTP 500
    constraint_found: function (object, state, constraint) {
        return {
            code: 400,
            message: `You can not set a ${state} state in a ${object} with a ${constraint} state`
        }
    }, //HTTP 400
    requirement_found: function (object, state, requirement) {
        return {
            code: 400,
            message: `A ${requirement} state in a ${object} is required for set a ${state} state`
        }
    },//HTTP 400
    shift_active: function (object) {
        return {
            code: 400,
            message: `${object.firstName} is actually in an active Shift`
        }
    }, //HTTP 400
    shift_programed: function (object) {
        return {
            code: 400,
            message: `${object.firstName} is actually in an previous mandatory programed Shift`
        }
    }, //HTTP 400
    dependency_found: function (dependency, father) {
        return {
            code: 400,
            message: `The ${father} have a ${dependency} related.`
        }
    },//HTTP 400
    not_dependency_found: function (dependency, father) {
        return {
            code: 400,
            message: `The ${father} hasn't a ${dependency} related.`
        }
    }, //HTTP 400
    relationship: function (dependency, father) {
        return {
            code: 400,
            message: `The ${father} have already this ${dependency} related.`
        }
    }, //HTTP 400
    not_permission: function () {
        return {
            code: 404,
            message: `You don´t have the permission to complete the action`
        }
    }, //HTTP 401
    invalid_state: function (object, field) {
        return {
            code: 400,//Unauthorized access for the moment
            message: `The ${object} have an invalid ${field} state.`
        }
    }, //HTTP 401
    invalid_type: function (object, field) {
        return {
            code: 400,//Unauthorized access for the moment
            message: `The ${object} have an invalid type: ${field}.`
        }
    }, //HTTP 400
    missing_state: function (object, field) {
        return {
            code: 400,//Unauthorized access for the moment
            message: `The ${object} ${field} state is missing`
        }
    }, //HTTP 400
    exists: function (object, field) {
        return {
            code: 400,//Unauthorized access for the moment
            message: `The ${object} already exists with the same ${field} value.`
        }
    }, //HTTP 400
    inactive: function (object) {
        return {
            code: 400,
            message: `The ${object} is on inactive or deleted state`
        }
    }, //HTTP 400
    bad_entry: function (entryA, entryB) {
        return {
            code: 400,
            message: `The ${entryA} has no consistency with the ${entryB}`
        }
    }, //HTTP 400
    isnt_company: function() {
        return {
            code: 400,
            message: `This punchcard isn't from this company`
        }
    },
    isnt_owner: function(object, owner) {
        return {
            code: 400,
            message: `This ${object} isn't from this ${owner}`
        }
    },
    field_already_assigned: function (object, field) {
        return {
            code: 400,//Unauthorized access for the moment
            message: `The ${object} already has a ${field} value`
        }
    }, //HTTP 400
    duplicated: function (object, values, state) { //HTTP 400
        let valuesString;
        values.forEach(value => {
            valuesString = valuesString ? `${valuesString} and for ${value}` : ` for ${value}`;
        });
        return {
            code: 400,
            message: `${state ? 'An ' + state : 'A'} ${object} already exists ${valuesString}`
        }
    }, //HTTP 400
    proccessing: function (object) { //HTTP 401
        return {
            code: 400,//Unauthorized access for the moment
            message: `The ${object} is being processed`
        }
    },
    fail_user_already_exists: function () {
        return {
            code: 400,
            message: `Failed operation, User already exists and linked with company`
        }
    }, //HTTP 400
};
