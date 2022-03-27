import { Router } from 'express';
import { SearchController } from '../controllers';
import { Container } from 'typescript-ioc';

const router = Router();
const searchController = Container.get(SearchController);
const {searchByFullText, searchBySingleTag, searchByTopicTitle, searchByUserId} = searchController;

router.get('/full-text-search', (req, res) => {
  searchByFullText(req, res);
});

router.get('/tags', (req, res) => {
  searchBySingleTag(req, res);
});

router.get('/topics', (req, res) => {
  searchByTopicTitle(req, res);
});

router.get('/users/:id', (req, res) => {
  searchByUserId(req, res);
});

export { router as searchRouter };
