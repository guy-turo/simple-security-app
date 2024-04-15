const express = require('express')

//const auth = require('../middleware/auth')

const loginRoute = express.Router()
const { dashboard, login, register } = require('../controllers/main')

loginRoute.route('/dashboard').get(dashboard)
loginRoute.route('/login').post(login)
loginRoute.route('/register').post(register)


module.exports = loginRoute