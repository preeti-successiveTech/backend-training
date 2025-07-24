import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { MockUser, GenerateMockdata } from '../utils/GenerateMockdata';
import { AuthenticateTokenMiddleware } from '../middleware/AuthenticateTokenMiddleware';

const router = express.Router();
const SECRET_KEY = 'Preeti';

const mockDataGenerator = new GenerateMockdata();
const mockUsers: MockUser[] = mockDataGenerator.generateUsers(5);

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

router.post('/authenticate', authenticateTokenMiddleware.handle(), (req: Request, res: Response) => {
  const receivedData = req.body as MockUser;

  if (!receivedData || !receivedData.name) {
    return res.status(400).json({ message: 'Invalid user data' });
  }

  mockUsers.push(receivedData);
  console.log('User added:', receivedData);

  res.json({
    message: '✅ User data received and added successfully',
    data: receivedData,
  });
});

router.get('/protectedData', authenticateTokenMiddleware.handle(), (req: Request, res: Response) => {
  res.json({
    message: '✅ You have accessed a protected route!',
    data: mockUsers,
    user: (req as any).user,
  });
});

export default router;
