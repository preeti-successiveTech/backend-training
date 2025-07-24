import express from 'express';
import { ValidateRegistration } from '../middleware/ValidateRegistration';

const router = express.Router();

const validateRegistration = new ValidateRegistration();

router.post('/register', validateRegistration.handle(), (req, res) => {
  res.status(200).json({
    message: '✅ Registration successful!',
    user: req.body,
  });
});

export default router;
