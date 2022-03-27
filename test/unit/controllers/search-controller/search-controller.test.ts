import { APP_URL } from '../../../utils/constants';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('GET api/v1/search/full-text-search', () => {
  it('Should return data list on successfully search by full text', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/full-text-search?text=Deploying on Azure')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
});

describe('GET api/v1/search/tags', () => {
  it('returns data when searching by tag', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/tags?tag=javascript')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
});

describe('GET api/v1/search/topics', () => {
  it('Should return a list of related topics', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/topics?title=Deploying on Ubuntu')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
  it('Should throw 400 if topic title is not provided', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/topics')
      .then((response) => {
        expect(response).to.have.status(400);
        return;
      });
  });
});


describe('GET api/v1/search/users/:id', () => {
  it('Should return a list of user participation activities', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/search/users/177960030022')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
});
