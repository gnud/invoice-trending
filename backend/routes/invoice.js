const express = require('express')
const router = express.Router()
const db = require('../models')

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.Invoice.findAll().then(rows => {
        return res.json(rows)
    })
})

module.exports = router
