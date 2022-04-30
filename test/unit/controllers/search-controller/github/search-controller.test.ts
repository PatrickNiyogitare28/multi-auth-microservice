/*eslint curly: ["error", "multi"]*/
import App from '../../../../../src/app';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
const ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

describe('GET api/v1/github/search/repositories', () => {
  it('Should return a list of github repositories', (done) => {
    chai
      .request(App)
      .get('/api/v1/github/search/repository?name=gerand-backend')
      .set('authorization', `${ACCESS_TOKEN}`)
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
      .set('authorization', `${ACCESS_TOKEN}`)
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
      .set('authorization', `${ACCESS_TOKEN}`)
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return done();
      });
  });
});

describe('GET api/v1/github/orgs/:organizationName', () => {
  it('Should return 404 when organization not found', (done) => {
    chai
      .request(App)
      .get('/api/v1/github/search/orgs/atlp-rwanda-n')
      .set('authorization', `${ACCESS_TOKEN}`)
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(404);
        return done();
      });
  });
  it('Should return 200 when organization is found', (done) => {
    chai
      .request(App)
      .get('/api/v1/github/search/orgs/atlp-rwanda')
      .set('authorization', `${ACCESS_TOKEN}`)
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(200);
        return done();
      });
  });
});

describe('GET api/v1/github/issues?q', () => {
  it('Should return a list of issues', (done) => {
    chai
      .request(App)
      .get('/api/v1/github/search/issues?q=Unable to compile typescript')
      .set('authorization', `${ACCESS_TOKEN}`)
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return done();
      });
  });
});
