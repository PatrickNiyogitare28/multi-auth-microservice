import { Router } from 'express';
import { FullTextSearchText } from '../controllers';
import { Container } from 'typescript-ioc';

const router = Router();
const fullTextSearch = Container.get(FullTextSearchText);

router.get('/', (req, res) => {
  fullTextSearch.searchByFullText(req, res);
});

export { router as FullTextSearchRouter };
