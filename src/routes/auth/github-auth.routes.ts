import { Router } from 'express';
import { getUserProfile } from '../../controllers/auth-controller';

const router = Router();

router.get('/user', getUserProfile);

export default router;
