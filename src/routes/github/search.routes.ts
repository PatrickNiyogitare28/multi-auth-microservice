import { Router } from 'express';
import { GithubSearchController} from '../../controllers';
import { Container } from 'typescript-ioc';

const router = Router();
const searchController = Container.get(GithubSearchController);

router.get('/repository', (req, res) => {
  searchController.searchRepository(req, res);
});
export { router as GithubSearchRouter };