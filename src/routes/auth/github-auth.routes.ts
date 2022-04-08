import { Router } from 'express';
import { GithubStrategyType } from '../../middlewares/passport/passport-strategy-type';
import { login, logout } from '../../controllers/auth-controller';
import passport from '../../strategies/passport.strategy';

const router = Router();

router.get('/',passport.authenticate('github'));

router.get('/callback', GithubStrategyType,login);

router.get('/logout', logout);

export default router;