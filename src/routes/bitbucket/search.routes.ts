import { Router } from 'express';
import { Container } from 'typescript-ioc';
import { BitBucketSearchController } from '../../controllers/bitbucket-search-controller/search-controller';

const router = Router();
const searchController = Container.get(BitBucketSearchController);

router.get('/repositories', (req, res) => {
  searchController.searchUserRepositories(req, res);
});

router.get('/workspace/:workspace/projects', (req, res) => {
  searchController.searchWorkSpaceRepositories(req, res);
})

router.get('/repositories/:workspace/:repoSlug/issues', (req, res) => {
  searchController.searchIssues(req, res);
})

router.get('/file-source/:workspace/:repository', (req, res) => {
  searchController.searchFileSource(req, res);
})

export { router as BitBucketRouter }; 