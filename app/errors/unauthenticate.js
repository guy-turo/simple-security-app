const { StatusCodes } = require('http-status-codes');
const { CustomAPIError } = require('../errors/custom_error')

class UnAuthenticateError extends CustomAPIError {

    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthenticateError