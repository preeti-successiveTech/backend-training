import { Request, Response, NextFunction } from 'express';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const method = req.method;
  const url = req.originalUrl;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url}`);

  next(); 
}