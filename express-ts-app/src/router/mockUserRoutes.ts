import express, { Request, Response } from 'express';
import { GenerateMockdata } from '../utils/GenerateMockdata';

const router = express.Router();
const generator = new GenerateMockdata();

const mockUsers = generator.generateUsers(10);

router.get('/', (req: Request, res: Response) => {
  res.json(mockUsers);
});

export default router;
