/* eslint-disable  @typescript-eslint/no-explicit-any */
import 'dotenv/config';
import passport from 'passport';
import { Strategy } from "passport-stackapps-ts";
import { Profile } from 'Profile';

const STACKEXCHANGE_CLIENT_ID = process.env.STACKEXCHANGE_CLIENT_ID;
const STACKEXCHANGE_CLIENT_SECRET = process.env.STACKEXCHANGE_CLIENT_SECRET;
const STACKEXCHANGE_APPS_KEY = process.env.STACKEXCHANGE_APPS_KEY;
passport.use(new Strategy({
    clientID: STACKEXCHANGE_CLIENT_ID,
    clientSecret: STACKEXCHANGE_CLIENT_SECRET,
    callbackURL: `http://${process.env.HOST}:${process.env.PORT}/auth/stack-exchange/callback`,
    stackAppsKey: STACKEXCHANGE_APPS_KEY,
    site: 'stackoverflow'
  },
  function(accessToken: string, refreshToken: string, profile:Profile, done: any) {
    process.nextTick(function () {
        return done(null, {profile, accessToken, refreshToken});
    });
  }
));

export default passport;