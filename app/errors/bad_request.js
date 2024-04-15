const { StatusCodes } = require('http-status-codes')

const { CustomAPIError } = require('../errors/custom_error')

class BadRequestError extends CustomAPIError {

    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError