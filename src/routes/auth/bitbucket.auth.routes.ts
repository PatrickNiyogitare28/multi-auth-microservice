import { Router } from 'express';
import { AtlassianStrategyType } from '../../middlewares/passport/passport-strategy-type';
import { login, logout } from '../../controllers/auth-controller';
import passport from '../../strategies/passport.strategy';

const router = Router();

router.get('/',passport.authenticate('atlassian'));

router.get('/callback', AtlassianStrategyType, login);

router.get('/logout', logout);

export default router;