import { Request, Response, NextFunction } from 'express';

export function addCustomHeader(headerName: string, headerValue: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader(headerName, headerValue);
    next();
  };
}
