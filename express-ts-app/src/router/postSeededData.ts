
import express, { Request, Response } from 'express';
import { mockUsers } from '../utils/GenerateMockdata';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  const receivedData = req.body;  
  mockUsers.push(receivedData);
  console.log(receivedData); 
  res.json({
    message: "Data received successfully!",
    data: receivedData,
  });
});

router.get('/',(req: Request, res: Response) => {
    res.json(mockUsers);
},)


export default router;