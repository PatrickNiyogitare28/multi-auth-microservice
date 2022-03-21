import { APP_URL } from '../../../utils/constants';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('UsersController', () => {
  it('Should return a list of user participation activities', () => {
    chai
      .request(APP_URL)
      .get('/api/v1/users/177960030022')
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body.data.items.length).greaterThanOrEqual(0);
        return;
      });
  });
});
