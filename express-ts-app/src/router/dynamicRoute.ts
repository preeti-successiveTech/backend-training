import express from 'express';
import { DynamicValidationMiddleware } from '../middleware/DynamicValidationMiddleware';

const router = express.Router();
const dynamicValidation = new DynamicValidationMiddleware();

router.post('/register', dynamicValidation.handle(), (req, res) => {
  res.json({ success: true, data: req.body });
});

router.post('/login', dynamicValidation.handle(), (req, res) => {
  res.json({ success: true, data: req.body });
});

export default router;
