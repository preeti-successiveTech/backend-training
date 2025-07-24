import { Request, Response, NextFunction, RequestHandler } from 'express';
import geoip from 'geoip-lite';

export class GeoLocationMiddleware {
  private allowedCountries: string[];

  constructor(allowedCountries: string[]) {
    this.allowedCountries = allowedCountries;
  }

  public handle(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction): void => {
      const ip = "115.97.0.1";

      const geo = geoip.lookup(ip);

      if (geo && this.allowedCountries.includes(geo.country)) {
        next();
      } else {
        res.status(403).json({ message: 'Access denied: Your geographic location is not authorized.' });
      }
    };
  }
}