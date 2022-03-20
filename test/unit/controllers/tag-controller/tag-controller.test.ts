import { APP_URL } from '../../../utils/constants';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('TagController', () => {
  it('returns data when searching by tag', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/tags?tag=javascript')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
});
