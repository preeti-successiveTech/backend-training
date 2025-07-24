import express from 'express';
import { GeoLocationMiddleware } from '../middleware/GeoLocationMiddleware';

const router = express.Router();
const allowedCountries = ['US', 'CA', 'IN'];

const geoLocationMiddleware = new GeoLocationMiddleware(allowedCountries);

router.get('/Location', geoLocationMiddleware.handle(), (req, res) => {
  res.status(200).json({ message: 'Access granted: You are in an authorized location.' });
});

export default router;
