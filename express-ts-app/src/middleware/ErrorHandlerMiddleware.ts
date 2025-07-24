import { Request, Response, NextFunction } from 'express';

export class ErrorHandlerMiddleware {
  public handle(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    console.error('Error:', err);

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
      error: true,
      message,
    });
  }
}