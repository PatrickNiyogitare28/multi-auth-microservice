/*eslint curly: ["error", "multi"]*/
import App from '../../../../../src/app';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);


describe('GET api/v1/github/search/repositories', () => {
  it('Should return a list of github repositories', (done) => {
    chai
      .request(App)
      .get('/api/v1/github/search/repository?name=gerand-backend')
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return done();
      });
  });
  it('Should throw 400 if repository name is not provided', (done) => {
    chai
      .request(App)
      .get('/api/v1/github/search/repository')
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(400);
        return done();
      });
  });
});


describe('GET api/v1/github/search/users', () => {
  it('Should return the user with payload', (done) => {
    chai
      .request(App)
      .get('/api/v1/github/search/users?username=yyx990803')
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return done();
      });
  });
});
