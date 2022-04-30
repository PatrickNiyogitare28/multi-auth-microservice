/*eslint curly: ["error", "multi"]*/
import App from '../../../../../src/app';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('GET api/v1/bitbucket/search/repositories?username=', () => {
  it('Should return data list on successfully search user repositories', (done) => {
    chai
      .request(App)
      .get('/api/v1/bitbucket/search/repositories?username=degide')
      .end((err, response) => {
        if (err) return done(err);
        expect(response).to.have.status(200);
        expect(response.body).to.haveOwnProperty('data');
        done();
      });
  });
});

describe('GET api/v1/bitbucket/search/workspace/degide/projects', () => {
  it('Should return workspace projects', (done) => {
    chai
    .request(App)
    .get('/api/v1/bitbucket/search/workspace/degide/projects')
    .end((err, response) => {
      if(err) return done(err);
      expect(response).to.have.status(200);
      expect(response.body).to.haveOwnProperty('data');
      done();
    })
  })
})

describe('GET api/v1/bitbucket/search/repositories/atlassian/todo-app-custom-ui/issues', () => {
  it('Should return workspace repository issues', (done) => {
    chai
    .request(App)
    .get('/api/v1/bitbucket/search/repositories/atlassian/todo-app-custom-ui/issues')
    .end((err, response) => {
      if(err) return done(err);
      expect(response).to.have.status(200);
      expect(response.body).to.haveOwnProperty('data');
      done();
    })
  })
})

describe('GET api/v1/bitbucket/search/file-source/atlassian/todo-app-custom-ui?filePath=src/master/README.md', () => {
  it('Should return repository sources', (done) => {
    chai
    .request(App)
    .get('/api/v1/bitbucket/search/file-source/atlassian/todo-app-custom-ui?filePath=src/master/README.md')
    .end((err, response) => {
      if(err) return done(err);
      expect(response).to.have.status(200);
      expect(response.body).to.haveOwnProperty('data');
      done();
    })
  })
})