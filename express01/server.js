require('dotenv').config()
const express = require('express')
const app = express()

const todos = [
    {id: 11, title: 'Learn HTML'},
    {id: 22, title: 'Learn CSS'},
    {id: 33, title: 'Learn Javascript'},
]

app.get('/', (req,res) => {
    res.json({msg : 'Welcome to Express Server'})
})

app.get('/todos', (req,res) => {
    res.json(todos)
})

app.get('/todos/search', (req,res) => {
    const {keyword} = req.query
    let output = todos.filter( el=> (
        el.title.toLowerCase().includes(keyword.toLowerCase())
    ))
    console.log(output)
    res.json(output)
})

// แปลง code นี้ให้หาจาก id ถ้าไม่มีให้ msg : "have no data" , status เป็น 404
app.get('/todos/:id', (req,res) => {
    const {id} = req.params
    console.log(id)
    let output = todos.filter(el=> el.id === +id)
    if(output.length <=0 )
        return res.status(404).json({msg: `Have no data with id=${id}`})
    res.json(output)  
})


app.get('/add/:x/:y', (req,res) => {
    const {x,y} = req.params
    console.log(req.params)
    let sum = +x + +y
    res.json({sum : sum})
})




app.use((req,res)=>{
    res.status(404).send({msg: 'resource not found'})
})

let port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log('Server on port :', port)
})