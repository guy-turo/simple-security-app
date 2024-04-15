const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors/index')
const User = require('../models/user')
const bcrypt = require('bcryptjs')




const login = (req, res) => {
    const { username, password } = req.body


    if (!username || !password) {
        throw new BadRequestError('please provide email and password')
    }
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user created ' + token })
}

const dashboard = (req, res) => {

    const luckyName = Math.floor(Math.random() * 100)
    res.status(200).json({
        message: "Hello " + "id: " + req.user.id + " username: " + req.user.username,
        secret: 'Here is your Authorized data, your lucky number' + luckyName
    })
}

const register = async(req, res) => {
    const { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const tempUser = { name, email, password: hashPassword }

    const token = jwt.sign({ userId: _id, name: name }, 'jwtSecret', { expiresIn: '30d' })
    const user = await User.create({...tempUser })
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })

}

module.exports = {
    login,
    dashboard,
    register,
}