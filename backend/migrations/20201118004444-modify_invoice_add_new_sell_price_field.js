'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'Invoices', // table name
                'sellPrice', // new field name
                {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: 0
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
