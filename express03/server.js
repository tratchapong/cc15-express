require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()

const todos = [
    {id:11, title: 'Learn HTML'},
    {id:22, title: 'Learn CSS'},
    {id:33, title: 'Learn Javascript'},
]

app.use(express.json()) //รับ body แบบ json
// app.use(express.urlencoded())

app.get('/todos', (req,res) => {
    console.log(qqq)
    res.json(todos)
})

app.post('/todos',(req, res)=>{
    todos.push(req.body)
    res.json({msg: 'Post todo'})
})

app.put('/todo/:id', (req,res) => {
    // ให้ทำ update ข้อมูลตาม params และ body ที่ส่งมา
    const {id} = req.params
    const {title} = req.body
    console.log(req.params)
    console.log(req.body)
    let idx = todos.findIndex( el => el.id === +id)
    todos[idx].title = title
    res.json({msg:'Update..'})
})

// app.get('/cat', async (req,res,next) => {
//     try {
//         const rs = await axios.get('https://cataas.com/api/c')
//         let amount = rs.data.length
//         res.json({ amount, allCat: rs.data})
//     } catch (error) {
//         next(error)
//     }
// })

app.get('/cat', (req,res,next) => {
    axios.get('https://cataas.com/api/c').then(rs => {
        console.log(rs.data[0])
        let amount = rs.data.length
        res.json({ amount, allCat: rs.data})
        // res.json({msg: 'CAT..'})
    }).catch(next)
})

app.use((req,res)=> {
    res.json({msg: 'Path not found'})
})

app.use((err,req,res,next)=> {
    console.log(err.message)
    res.status(500).json({msg: 'Have error in Backend side'})
})

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log('Server on port=', port)
})