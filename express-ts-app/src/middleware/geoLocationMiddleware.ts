import { Request, Response, NextFunction } from 'express';
import geoip from 'geoip-lite';

export const geoLocationMiddleware = (allowedCountries: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = "115.97.0.1";
    const geo = geoip.lookup(ip as string);

    if (geo && allowedCountries.includes(geo.country)) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied: Your geographic location is not authorized.' });
    }
  };
};
