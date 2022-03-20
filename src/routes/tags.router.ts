import { Router } from 'express';
import { TagsController } from '../controllers';
import { Container } from 'typescript-ioc';

const router = Router();
const tagsController = Container.get(TagsController);

router.get('/', (req, res) => {
  tagsController.getBySingleTag(req, res);
});

export { router as TagsRouter };
