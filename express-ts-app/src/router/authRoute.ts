import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import {  verifyToken } from '../middleware/AuthMiddleware';
import  User1  from '../models/userModel';

const router = Router();
const controller = new AuthController();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/profile', verifyToken, async (req, res) => {
  const user = await User1.findById((req as any).user.id).select('-password');
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json({ user });
});

export default router;