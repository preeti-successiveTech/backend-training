import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', err);

  const statusCode = err.status || 500; // Default to 500 if no status provided
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: true,
    message,
  });
}
