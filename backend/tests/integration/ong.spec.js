const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Test Name",
            email: "email@test.com",
            whatsapp: "00000000000",
            city: "Test City",
            uf: "XX"              
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be able to get ONGs', async () => {
        const response = await request(app).get('/ongs');

        expect(response.body[0]).toHaveProperty('name', 'Test Name')
        expect(response.body[0]).toHaveProperty('email', 'email@test.com')
        expect(response.body[0]).toHaveProperty('whatsapp', '00000000000')
        expect(response.body[0]).toHaveProperty('city', 'Test City')
        expect(response.body[0]).toHaveProperty('uf', 'XX')

    })
})