const { StatusCodes } = require('http-status-codes')
const { CustomAPIError } = require('../errors/custom_error');
const errorHandlerMiddleWare = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ err: "Something went wrong, try again later " })
}

module.exports = errorHandlerMiddleWare