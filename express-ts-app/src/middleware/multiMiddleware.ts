import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Middleware 1: Log request details
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Logger: ${req.method} ${req.url}`);
  next();
}

// Middleware 2: Check if user is authenticated 
export function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: No auth header' });
  }
  console.log('Auth header present, proceeding');
  next();
}

// Middleware 3: Add a timestamp to request object
export function addTimestamp(req: Request, res: Response, next: NextFunction) {
  (req as any).requestTime = new Date().toISOString();
  next();
}

