import { Router } from 'express';
import { FullTextSearchText } from '../controllers';
import { Container } from 'typescript-ioc';

const router = Router();
const fullTextSearch = Container.get(FullTextSearchText);

router.get('/full-text', (req, res) => {
  fullTextSearch.searchByFullText(req, res);
});

router.get('/tags', (req, res) => {
  fullTextSearch.searchBySingleTag(req, res);
});

router.get('/topics', (req, res) => {
  fullTextSearch.searchByTopicTitle(req, res);
});

router.get('/users', (req, res) => {
  fullTextSearch.searchByUserId(req, res);
});

export { router as searchRouter };
