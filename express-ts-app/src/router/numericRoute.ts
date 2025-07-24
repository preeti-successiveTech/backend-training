import express from 'express';
import { ValidateNumericQuery } from '../middleware/ValidateNumericQuery';

const router = express.Router();
const validateNumericQueryMiddleware = new ValidateNumericQuery(['page', 'limit']);

router.get('/items', validateNumericQueryMiddleware.handle(), (req, res) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;

  res.json({ message: 'Valid query params!', page, limit });
});

export default router;
