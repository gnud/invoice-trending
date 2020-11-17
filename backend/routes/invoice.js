const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('A list')
})

module.exports = router
