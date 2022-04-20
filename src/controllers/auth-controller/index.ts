/* eslint-disable  @typescript-eslint/no-explicit-any */
import passport from '../../strategies/passport.strategy';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const { get } = axios;
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const response = await get(`${process.env.GITHUB_API}/user`, {
      headers: { Authorization: `token ${authorization}` },
    });
    return res.send(response?.data);
  } catch (e: any) {
    return e;
  }
};

export const login = (req: any, res: Response, next: NextFunction): any => {
  passport.authenticate(req.passportStrategyType, function (err: any, user: any, info: any) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ success: false, message: 'Authentication failed' });
    }
    return res.status(200).json({ user, info });
  })(req, res, next);
};

export const logout = (req: Request, res: Response): any => {
  req.logout();
  res.status(200).json({ success: true, message: 'Successfully logged out' });
};
