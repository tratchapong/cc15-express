const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    console.log(qqq)
    res.json({msg: 'in userRoute'})
})

router.post('/',(req, res) => {
    res.json({msg: 'POST in userRoute'})   
})

module.exports = router