import { Router } from 'express';
import { StackExchangeStrategyType } from '../../middlewares/passport/passport-strategy-type';
import { login, logout } from '../../controllers/auth-controller';
import passport from '../../strategies/passport.strategy';

const router = Router();

router.get('/',passport.authenticate('stack-exchange'));

router.get('/callback', StackExchangeStrategyType, login);

router.get('/logout', logout);

export default router;