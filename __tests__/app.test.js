const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /users', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/users')
      .expect(200, done);
  });
});