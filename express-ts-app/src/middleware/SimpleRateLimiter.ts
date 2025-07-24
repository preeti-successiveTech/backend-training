import { Request, Response, NextFunction, RequestHandler } from 'express';

export class SimpleRateLimiter {
  private requestCounts: Record<string, number> = {};
  private maxRequests: number;

  constructor(maxRequests: number) {
    this.maxRequests = maxRequests;
  }

  public handle(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      const ip = req.ip || 'unknown';

      if (!this.requestCounts[ip]) {
        this.requestCounts[ip] = 1;
      } else {
        this.requestCounts[ip]++;
      }

      if (this.requestCounts[ip] > this.maxRequests) {
        res.status(429).json({
          error: 'Too many requests!',
          totalRequests: this.requestCounts[ip],
        });
        return;
      }

      console.log(`IP: ${ip}, Request Count: ${this.requestCounts[ip]}`);
      next();
    };
  }
}