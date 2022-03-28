/*eslint curly: ["error", "multi"]*/
import { APP_URL } from '../../../utils/constants';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('GET api/v1/search/full-text-search', () => {
  it('Should return data list on successfully search by full text', (done) => {
    chai
    .request(APP_URL)
    .get('/api/v1/search/full-text-search?text=Deploying on Azure')
    .end((err, response) => {
        if(err) return done(err);
        console.log("in tests ...");
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        done();
      });
  });
});

describe('GET api/v1/search/tags', () => {
  it('returns data when searching by tag', (done) => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/tags?tag=javascript')
      .end((err,response) => {
        if(err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        done();
      });
  });
});

describe('GET api/v1/search/topics', () => {
  it('Should return a list of related topics', (done) => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/topics?title=Deploying on Ubuntu')
      .end((err, response) => {
        if(err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return done();
      });
  });
  it('Should throw 400 if topic title is not provided', (done) => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/topics')
      .end((err, response) => {
        if(err) return done(err);
        expect(response).to.have.status(400);
        return done();
      });
  });
});


describe('GET api/v1/search/users/:id', () => {
  it('Should return a list of user participation activities', (done) => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/users/177960030022')
      .end((err,response) => {
        if(err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return done(err);
      });
  });
});
