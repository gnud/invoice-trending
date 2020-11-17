'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'Invoices', // table name
                'external_id', // new field name
                {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: true,
                    defaultValue: null
                },
            )
        ])
    },

    down: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.removeColumn('Invoices', 'external_id'),
        ])
    }
}
