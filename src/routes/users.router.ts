import { Router } from 'express';
import { Container } from 'typescript-ioc';
import { UsersController } from '../controllers/users-controller';

const router = Router();
const usersController = Container.get(UsersController);

router.get('/:id', (req, res) => {
  usersController.searchByUserId(req, res);
});

export { router as UsersRouter };
