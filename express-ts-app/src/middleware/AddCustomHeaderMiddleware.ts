import { Request, Response, NextFunction, RequestHandler } from 'express';

export class AddCustomHeaderMiddleware {
  private headerName: string;
  private headerValue: string;

  constructor(headerName: string, headerValue: string) {
    this.headerName = headerName;
    this.headerValue = headerValue;
  }

  public handle(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      res.setHeader(this.headerName, this.headerValue);
      next();
    };
  }
}