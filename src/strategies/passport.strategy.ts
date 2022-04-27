/* eslint-disable  @typescript-eslint/no-explicit-any */
import 'dotenv/config';
import passport from 'passport';
import AtlassianStrategy from './atlassian.strategry';
import { Strategy as StackExchangeStrategy } from 'passport-stackapps-ts';
import { Profile } from 'Profile';

const STACKEXCHANGE_CLIENT_ID = process.env.STACKEXCHANGE_CLIENT_ID as string;
const STACKEXCHANGE_CLIENT_SECRET = process.env.STACKEXCHANGE_CLIENT_SECRET as string;
const STACKEXCHANGE_APPS_KEY = process.env.STACKEXCHANGE_APPS_KEY as string;

const BITBUCKET_CLIENT_ID = process.env.BITBUCKET_CLIENT_ID as string;
const BITBUCKET_SECRET = process.env.BITBUCKET_SECRET as string;

passport.use(
  new StackExchangeStrategy(
    {
      clientID: STACKEXCHANGE_CLIENT_ID,
      clientSecret: STACKEXCHANGE_CLIENT_SECRET,
      callbackURL: `http://${process.env.HOST}:${process.env.PORT}/api/v1/auth/stack-exchange/callback`,
      stackAppsKey: STACKEXCHANGE_APPS_KEY,
      site: 'stackoverflow',
    },
    function (accessToken: string, refreshToken: string, profile: Profile, done: any) {
      process.nextTick(function () {
        return done(null, { profile, accessToken, refreshToken });
      });
    }
  )
);

passport.use
(new AtlassianStrategy({
  clientID: BITBUCKET_CLIENT_ID,
  clientSecret: BITBUCKET_SECRET,
  callbackURL: `http://${process.env.HOST}:${process.env.PORT}/api/v1/auth/bitbucket/callback`,
  scope: 'offline_access read:jira-user read:bitbucket-user',
},
function (accessToken:string, refreshToken:string, profile: unknown, cb: unknown, done:any) {
  process.nextTick(function () {
    return done(null, { profile, accessToken, refreshToken });
  });
}
));
export default passport;
