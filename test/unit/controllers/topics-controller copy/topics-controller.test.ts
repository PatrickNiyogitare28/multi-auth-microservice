import { APP_URL } from '../../../utils/constants';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('TopicsController', () => {
  it('Should return a list of related topics', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/topics?title=Deploying on Ubuntu')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
  it('Should throw 400 if topic title is not provided', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/topics')
      .then((response) => {
        expect(response).to.have.status(400);
        return;
      });
  });
});
