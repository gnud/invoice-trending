function calcSellPrice(dueOnValue, amountValue) {
    const totalYearSeconds = 1000 * 3600 * 24

    const now = new Date()
    const diffTime = dueOnValue.getTime() - now.getTime()
    const diffDays = Math.abs(Math.round(diffTime / totalYearSeconds))

    const calcCoefficient = diffDays <= 30 ? 0.3 :
        diffDays > 30 ? 0.5 : 0

    return calcCoefficient * amountValue
}

function validateFields(id, amount, dueOn) {
    // Assigning multiple variables using destructuring assignment
    let [idState, amountState, dueOnState] = Array(3).fill(false) // just playing around

    let idValue = Number.parseInt(id)
    if (isNaN(idValue)) {
        idState = true
    }

    let amountValue = Number.parseInt(amount)
    if (isNaN(amountValue)) {
        amountState = true
    }

    let dueOnValue = new Date(dueOn)
    if (isNaN(dueOnValue.getDate())) {
        dueOnState = true
    }

    return {idValue, idState, amountValue, amountState, dueOnValue, dueOnState}
}

module.exports.calcSellPrice = calcSellPrice
module.exports.validateFields = validateFields
