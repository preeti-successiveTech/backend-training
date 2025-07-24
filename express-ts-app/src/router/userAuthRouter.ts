import express, { Request, Response } from 'express';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import { AuthenticateTokenMiddleware } from '../middleware/AuthenticateTokenMiddleware';

const router = express.Router();
const SECRET_KEY = 'Preeti'; // Or import from config/env

// Instantiate middleware class with the secret key
const authenticateTokenMiddleware = new AuthenticateTokenMiddleware(SECRET_KEY);

router.post('/login', (req: Request, res: Response) => {
  const { username } = req.body;
  
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  const user = { name: username };
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

// Use the class middleware's handle() method here
router.get('/protected', authenticateTokenMiddleware.handle(), (req: Request, res: Response) => {
  res.json({ message: '✅ You have accessed a protected route!', user: (req as any).user });
});

router.get('/error', (req, res, next) => {
  next(createError(400, 'This is a simulated error.'));
});

export default router;
