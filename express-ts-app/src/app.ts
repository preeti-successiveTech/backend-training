
import express, { Request, Response } from 'express';
import { users } from './Mockdata';

const app = express();
const PORT = 3000;

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:3000`);
});
