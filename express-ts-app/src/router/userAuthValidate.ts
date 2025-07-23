import express from 'express';
import { validateRegistration } from '../middleware/validateRegistration';

const router = express.Router();

router.post('/register', validateRegistration, (req, res) => {
  res.status(200).json({
    message: '✅ Registration successful!',
    user: req.body
  });
});

export default router;
