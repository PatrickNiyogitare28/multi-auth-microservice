/* eslint-disable  @typescript-eslint/no-explicit-any */
import passport from "../../strategies/stackoverflow.strategy";
import {Request, Response, NextFunction} from 'express';

export const login = (req:Request, res: Response, next:NextFunction): any  => {
    passport.authenticate('stack-exchange', function(err:any, user:any, info:any) {
        if (err) {
          return next(err);
        }
        if (!user) {
          return res.status(401).json({success: false, message:'Authentication failed'});
        }
        return res.status(200).json({user, info});
      })(req, res, next); 
};

export const logout = (req:Request, res:Response) : any => {
    req.logout();
    res.status(200).json({success: true, message: "Successfully logged out"});
} ;