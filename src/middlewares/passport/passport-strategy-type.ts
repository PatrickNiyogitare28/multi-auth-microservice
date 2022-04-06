import {NextFunction, Response} from 'express';

export const GithubStrategyType  = (req: any, _: Response, next: NextFunction) => {
   req.passportStrategyType = 'github';
   next();
}

export const StackExchangeStrategyType  = (req: any, _: Response, next: NextFunction) => {
   req.passportStrategyType = 'stack-exchange';
   next();
}