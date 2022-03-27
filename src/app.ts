/* eslint-disable  @typescript-eslint/no-explicit-any */
import 'module-alias/register';
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from './strategies/stackoverflow.strategy';
import AuthRouter from './routes/auth.routes';
import { searchRouter } from './routes';
import { User } from 'User';

const app = express();
const API_PREFIX = process.env.API_PREFIX;
app.use(passport.initialize());
passport.serializeUser(function (user: User | any, done: any) {
  done(null, user);
});
passport.deserializeUser(function (user: User, done: any) {
  done(null, user);
});
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.PASSPORT_SECRET || 'adka-133a',
  })
);
app.use(passport.session());
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to the Stackoverflow Microservice API' });
});
app.use(`${API_PREFIX}/auth`, AuthRouter);
app.use(`${API_PREFIX}/search`, searchRouter);

export default app;
