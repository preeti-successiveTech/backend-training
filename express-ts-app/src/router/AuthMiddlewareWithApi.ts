import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { MockUser, mockUsers } from '../utils/GenerateMockdata';
import { authenticateToken, secretkey } from '../middleware/auth';

const router = express.Router();
const SECRET_KEY = secretkey;
// it will check the login creaditional 
router.post('/login', (req: Request, res: Response) => {
  const username = req.body;
    if(!username)
    {
         return res.status(400).json({ message: 'Username is required' });
    }
const user = {name: username};                                     // create a payload
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });   // create a token

  res.json({ token });
});
// check the token 
router.post('/authenticate', authenticateToken, (req: Request, res: Response) => {
  const receivedData = req.body as MockUser;                        // data, I want to add in my mockdata

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
router.get('/protectedData', (req: Request, res: Response) => {                // it will display the data 
  res.json({
    message: '✅ You have accessed a protected route!',
    data: mockUsers,
    user: (req as any).user,
  });
});

export default router;
