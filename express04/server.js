require('dotenv').config()
const express = require('express')
const app = express()
const userRoute = require('./routes/userRoute')
const todoRoute = require('./routes/todoRoute')
// const todoRoute = ทำ todoRoute รับ method GET /todo, GET /todo/search
const notFoundMiddleware = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/errorMiddleware')

app.use('/user', userRoute)
app.use('/todo', todoRoute)

app.use(notFoundMiddleware)
// app.use((req,res)=>{
//     res.status(404).json({msg: 'Path not found'})
// })

app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log('Server on ', port))