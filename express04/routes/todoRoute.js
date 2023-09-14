const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.json({msg: 'in todoRoute'})
})
router.get('/search',(req,res) => {
    res.json({msg: 'Search in todoRoute'})
})



module.exports = router