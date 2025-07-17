
import express, { Request, Response } from 'express';
import { mockUsers } from '../utils/GenerateMockdata';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(mockUsers);
});

export default router;