'use strict'

const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config.js')[env]
const sequelize = new Sequelize(
    config.database, config.username, config.password, config
)
const faker = require('faker')
const db = require('../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return db.Invoice.findAll({distinct: 'amount'})
            .then(conditions => {
                const items = generateFakeInvoices(10, conditions)
                return queryInterface.bulkInsert('Invoices', items, {})
            })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Invoices', null, {})
    }
}

function generateFakeInvoices(count, conditions) {
    const items = []
    for (let i = 0; i < count; i++) {
        const newItem = {
            amount: faker.random.number(),
            dueOn: faker.date.recent('90'),
            createdAt: faker.date.recent('90'),
            updatedAt: new Date(), // now
        }
        items.push(newItem)
    }
    return items
}
