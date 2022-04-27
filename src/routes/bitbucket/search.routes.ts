import { Router } from 'express';
import { Container } from 'typescript-ioc';
import { BitBucketSearchController } from '../../controllers/bitbucket-search-controller/search-controller';

const router = Router();
const searchController = Container.get(BitBucketSearchController);

router.get('/repositories', (req, res) => {
  searchController.searchUserRepositories(req, res);
});

router.get('/workplace/:workplace/projects', (req, res) => {
  searchController.searchWorkplaceRepositories(req, res);
})
export { router as BitBucketRouter }; 