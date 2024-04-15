require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const notFoundError = require('./middleware/not-found')
const errorHandlerMiddleWare = require('./middleware/error_handler')
const mainRoute = require('./routers/main')

const jobsRoute = require('./routers/jobs')

//middleware
app.use(express.static('./public'))
app.use(express.json())

const v1 = '/api/v1'

app.use(v1 + '/auth', mainRoute)
app.use(v1 + '/jobs', jobsRoute)
app.use(notFoundError)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 3000
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,
            console.log('server running on port :' + port)
        )
    } catch (err) {
        console.log(err.message)
    }
}
start()