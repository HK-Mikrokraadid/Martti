const request = require('supertest');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const app = require('../app');
const { setupTestDatabase } = require('../testDbSetup'); 

let userToken;

const user = {
    email: 'user@user.ee',
    password: 'user',
};

before(async () => {
    await setupTestDatabase();
    const response = await request(app).post('/users/login').send(user);
    userToken = response.body.token;
});

describe('Users endpoint', async () => {
    it('Should response 401 and error message because user is not logged in', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).equal(401);
        expect(response.body.message).equal('Token is not provided');
    });
    it('Should response 403 and error message because user is not admin', async () => {
        const response = await request(app)
            .get('/users')
            .set('Authorization', `Bearer ${userToken}`);
        expect(response.statusCode).equal(403);
        expect(response.body.message).equal('You have to be admin to access this resource');
    });
});