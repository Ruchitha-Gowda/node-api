const express = require('express')

const router = express.Router()

router.get('/test-route', function(req,res){
    res.send('my first ever api and routes ')
})

router.get('/test-me', function(req,res){
    res.send('my first ever api and routes ')
})

module.exports = router