require('dotenv').config()
const express = require('express')
const app = express()

const middleWare1 = (req, res, next)=>{
    console.log('Middleware 1')
    res.json({msg: 'Middleware 01 run..'})
    next()
}

const middleWare2 = (req, res, next)=>{
    console.log('Middleware 2')
    res.json({msg: 'Middleware 02 run..'})
    // next()
}

app.get('/', middleWare1,middleWare2)

// app.get('/', middleWare2)



app.get('*',(req, res,next) => {
    console.log('Middleware 3')
    res.json({msg: 'Middleware 03 run..'})
})

app.use((req,res,next) => {
    console.log('Middleware 0')
    res.json({msg:'0000'})
    next()
})

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log('Server on port=', port)
})