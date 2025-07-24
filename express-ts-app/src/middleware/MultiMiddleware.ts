import { Request, Response, NextFunction, RequestHandler } from 'express';

export class MultiMiddleware {
  public logger(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      console.log(`Logger: ${req.method} ${req.url}`);
      next();
    };
  }

  public checkAuth(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        res.status(401).json({ error: 'Unauthorized: No auth header' });
        return;
      }
      console.log('Auth header present, proceeding');
      next();
    };
  }

  public addTimestamp(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      (req as any).requestTime = new Date().toISOString();
      next();
    };
  }
}