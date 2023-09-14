require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const notFound = require('./middlewares/notFound')
const error_mw = require('./middlewares/errorMiddleware')

app.use('/static', express.static('public'))

app.use(notFound)
app.use(error_mw)

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log('Server on',port))

