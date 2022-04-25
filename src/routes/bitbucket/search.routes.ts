import { Router } from 'express';
import { Container } from 'typescript-ioc';
import { BitBucketSearchController } from '../../controllers/bitbucket-search-controller/search-controller';

const router = Router();
const searchController = Container.get(BitBucketSearchController);

router.get('/repositories', (req, res) => {
  searchController.searchRepositories(req, res);
});

export { router as BitBucketRouter };