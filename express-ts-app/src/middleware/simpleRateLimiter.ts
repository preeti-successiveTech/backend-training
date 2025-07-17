import { Request, Response, NextFunction } from 'express';

const requestCounts: Record<string, number> = {};

export function simpleRateLimiter(maxRequests: number) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || 'unknown';

    if (!requestCounts[ip]) {
      requestCounts[ip] = 1;
    } else {
      requestCounts[ip]++;
    }

    if (requestCounts[ip] > maxRequests) {
      return res.status(429).json({
        error: 'Too many requests!',
        totalRequests: requestCounts[ip],
      });
    }

    console.log(`IP: ${ip}, Request Count: ${requestCounts[ip]}`);
    next();
  };
}
