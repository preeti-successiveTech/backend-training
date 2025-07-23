import express from 'express';
import { dynamicValidation } from '../middleware/dynamicValidation';

const router = express.Router();

router.post('/register', dynamicValidation(), (req, res) => {
  res.json({ success: true, data: req.body });
});

router.post('/login', dynamicValidation(), (req, res) => {
  res.json({ success: true, data: req.body });
});

export default router;
