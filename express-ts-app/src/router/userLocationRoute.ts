import express from 'express';
import { geoLocationMiddleware } from '../middleware/geoLocationMiddleware';

const router = express.Router();
const allowedCountries = ['US', 'CA', 'IN'];

router.get('/Location', geoLocationMiddleware(allowedCountries), (req, res) => {
  res.status(200).json({ message: 'Access granted: You are in an authorized location.' });
});

export default router;