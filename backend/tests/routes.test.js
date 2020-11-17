const request = require('supertest')
const app = require('../app')

describe('Invoice routes', () => {
    it('should invoice list', async () => {
        const res = await request(app)
            .get('/invoice')
            .send()
        expect(res.statusCode).toEqual(200)
    })
})
