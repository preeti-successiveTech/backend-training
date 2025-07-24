import { Request, Response, NextFunction, RequestHandler } from 'express';

export class RequestLoggerMiddleware {
  public handle(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      const method = req.method;
      const url = req.originalUrl;
      const timestamp = new Date().toISOString();

      console.log(`[${timestamp}] ${method} ${url}`);

      next();
    };
  }
}