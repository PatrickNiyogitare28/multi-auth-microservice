import { Router } from 'express';
import { GithubSearchController} from '../../controllers';
import { Container } from 'typescript-ioc';

const router = Router();
const searchController = Container.get(GithubSearchController);

router.get('/repository', (req, res) => {
  searchController.searchRepository(req, res);
});

router.get('/users', (req, res) => {
  searchController.searchUserByUserName(req, res);
});

router.get('/issues', (req, res) => {
  searchController.searchIssues(req, res);
});

router.get('/orgs/:organizationName', (req, res) => {
  searchController.getOrganizationByOrgName(req, res);
})
export { router as GithubSearchRouter };