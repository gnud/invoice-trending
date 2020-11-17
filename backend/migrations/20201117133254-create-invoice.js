// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Invoices', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            amount: {
                type: Sequelize.INTEGER
            },
            dueOn: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Invoices')
    }
}
