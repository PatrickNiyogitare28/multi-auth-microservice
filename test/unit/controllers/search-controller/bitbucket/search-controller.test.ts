/*eslint curly: ["error", "multi"]*/
import App from '../../../../../src/app';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('GET api/v1/bitbucket/search/repositories?username=', () => {
  it('Should return data list on successfully search user repositories', (done) => {
    chai
      .request(App)
      .get('http://localhost:5000/api/v1/bitbucket/search/repositories?username=degide')
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body).to.haveOwnProperty('data');
        done();
      });
  });
});
