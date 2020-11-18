const express = require('express')
const multer = require('multer')
const csv = require('csvtojson')
const db = require('../models')
const invoiceHelpers = require('./invoice_helpers')

const router = express.Router()

const upload = multer({storage: multer.memoryStorage()})

/* GET invoice listing. */
router.get('/', function (req, res, next) {
    db.Invoice.findAll().then(rows => {
        return res.json(rows)
    })
})

/* POST invoice create. */
router.post('/', upload.single('csv'), async function (req, res, next) {
    const list = await csv().fromString(req.file.buffer.toString())
    const errorItems = []
    const rows = []

    list.forEach(item => {
        const {id, amount, dueOn} = item

        // Validate CSV
        const {
            idValue,
            idState,
            amountValue,
            amountState,
            dueOnValue,
            dueOnState
        } = invoiceHelpers.validateFields(id, amount, dueOn)

        const failed = idState || amountState || dueOnState // only one true fails all

        if (failed) {
            errorItems.push({
                value: item,
                errors: {
                    idValid: !idState,
                    amountValid: !amountState,
                    dueONValid: !dueOnState,
                }
            })
        }

        if (!failed) {
            rows.push(item)

            let sellPrice = invoiceHelpers.calcSellPrice(dueOnValue, amountValue)

            db.Invoice.create({
                amount: amountValue,
                dueOn: dueOnValue,
                external_id: idValue,
                sellPrice: sellPrice,
            })
        }
    })

    return res.json({
        failed: errorItems,
        passed: rows
    })
})

module.exports = router
