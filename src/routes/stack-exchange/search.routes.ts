import { Router } from 'express';
import { StackExchangeSearchController } from '../../controllers';
import { Container } from 'typescript-ioc';

const router = Router();
const searchController = Container.get(StackExchangeSearchController);

router.get('/tags', (req, res) => {
  searchController.searchBySingleTag(req, res);
});

router.get('/topics', (req, res) => {
  searchController.searchByTopicTitle(req, res);
});

router.get('/full-text-search', (req, res) => {
  searchController.searchByFullText(req, res);
});

router.get('/users/:id', (req, res) => {
  searchController.searchByUserId(req, res);
});

export { router as StackExchangeSearchRouter };