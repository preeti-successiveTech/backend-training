import express, { Request, Response } from 'express';
const createError = require('http-errors');
import jwt from 'jsonwebtoken';
import { authenticateToken, secretkey } from '../middleware/auth';

const router = express.Router();
const SECRET_KEY =  secretkey;

router.post('/login', (req: Request, res: Response) => {
  const username = req.body;
    if(!username)
    {
         return res.status(400).json({ message: 'Username is required' });
    }
const user = {name: username};
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: '✅ You have accessed a protected route!', user: (req as any).user });
});
router.get('/error', (req, res, next) => {
  next(createError(400, 'This is a simulated error.'));
});

export default router;
