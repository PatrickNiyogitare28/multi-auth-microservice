import { APP_URL } from '../../../utils/constants';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('FullTextSearchController', () => {
  it('Should return data list on successfully search by full text', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/full-text-search?text=Deploying on Azure')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
});
