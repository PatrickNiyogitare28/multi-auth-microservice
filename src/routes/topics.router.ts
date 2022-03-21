import { Router } from 'express';
import { TopicsController } from '@controllers/topics-controller';
import { Container } from 'typescript-ioc';

const router = Router();
const topicsController = Container.get(TopicsController);

router.get('/', (req, res) => {
  topicsController.searchByTopicTitle(req, res);
});

export { router as TopicsRouter };
