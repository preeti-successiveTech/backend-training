import express, { Request, Response } from 'express';
import { GenerateMockdata, MockUser } from '../utils/GenerateMockdata';

const router = express.Router();

const generator = new GenerateMockdata();
const mockUsers: MockUser[] = generator.generateUsers(10);

router.post('/', (req: Request, res: Response) => {
  const receivedData: MockUser = req.body;

  if (!receivedData.id) {
    receivedData.id = mockUsers.length + 1;
  }

  mockUsers.push(receivedData);
  console.log('New user added:', receivedData);

  res.json({
    message: "Data received successfully!",
    data: receivedData,
  });
});

router.get('/', (req: Request, res: Response) => {
  res.json(mockUsers);
});

export default router;
