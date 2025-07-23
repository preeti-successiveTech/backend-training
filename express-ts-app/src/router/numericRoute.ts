import express from 'express';
import { validateNumericQuery } from '../middleware/validateNumericQuery';

const router = express.Router();

router.get('/items', validateNumericQuery(['page', 'limit']), (req, res) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;

  res.json({ message: 'Valid query params!', page, limit });
});

export default router;
