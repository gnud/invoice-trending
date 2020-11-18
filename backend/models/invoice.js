'use strict'

const {
    Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Invoice extends Model {
        static associate(models) {
            // define association here
        }
    }
    Invoice.init({
        amount: DataTypes.INTEGER,
        dueOn: DataTypes.DATE,
        sellPrice: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Invoice',
    })
    return Invoice
}
