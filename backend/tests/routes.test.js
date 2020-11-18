const request = require('supertest')
const app = require('../app')
const db = require('../models')
const path = require('path')

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

    it('should invoice upload', async () => {
        const res = await request(app)
            .post('/invoice')
            // NOTE: Can be replaced with dynamically generated csv file in memory, for better testing, someday
            .attach('csv', path.resolve('tests', 'data', 'sample1.csv'))
        expect(Object.keys(res.body)).toContain('failed')
        expect(res.body.failed.length).toEqual(1)
        expect(Object.keys(res.body)).toContain('passed')
        expect(res.body.passed.length).toEqual(3)
    })

    // After all tests have finished, close the DB connection
    afterAll(async () => {
        await db.sequelize.close()
    })
})
