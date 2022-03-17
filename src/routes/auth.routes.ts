import { Router } from 'express';
import { login, logout } from '../controllers';
import passport from '../strategies/stackoverflow.strategy';

const router = Router();

router.get('/stack-exchange',passport.authenticate('stack-exchange'));

router.get('/stack-exchange/callback', login);

router.get('/logout', logout);

export default router;