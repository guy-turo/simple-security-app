const jwt = require('jsonwebtoken');
const { UnAuthenticateError } = require('../errors/index')


const authenticationMiddleware = async(req, res, next) => {

    const authHeader = req.headers.authorization

    if (!authHeader || authHeader.startsWith('Bearer ')) {
        throw new UnAuthenticateError('No Token provided ')
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()
    } catch (err) {
        throw new UnAuthenticateError('Not authorized to access this route ')
    }

}

module.exports = authenticationMiddleware