const request = require('supertest')
const app = require('../app')
const db = require('../models')

describe('Invoice routes', () => {
    it('should invoice list', async () => {
        const res = await request(app)
            .get('/invoice')
            .send()
        expect(res.statusCode).toEqual(200)
    })

    it('should invoice list json response', async () => {
        const res = await request(app)
            .get('/invoice')
            .send()
        expect(res.statusCode).toEqual(200)
        expect(res.body.length).toBeGreaterThanOrEqual(1)
    })

    // After all tests have finished, close the DB connection
    afterAll(async () => {
        await db.sequelize.close()
    })
})
