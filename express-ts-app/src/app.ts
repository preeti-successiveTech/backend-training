
import express, { Request, Response } from 'express';
import { users } from './utils/Mockdata';
import mockUserRoutes  from './router/mockUserRoutes';
import postSeededData from './router/postSeededData'; 
import useAuthRouter from './router/userAuthRouter'; 
import AuthMiddlewareWithApi from './router/AuthMiddlewareWithApi';
import { requestLogger } from './middleware/customLoggingMiddleware';
import { errorHandler } from './middleware/errorHandler';
import { logger, checkAuth, addTimestamp } from './middleware/multiMiddleware'
import { addCustomHeader } from './middleware/addCustomHeader';
import { simpleRateLimiter } from './middleware/simpleRateLimiter';


const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(simpleRateLimiter(5));
app.use(addCustomHeader('Preeti-Custom-header', 'MyExpressApp'));
app.use(requestLogger);
app.use('/mockUsers', mockUserRoutes);
app.use('/data',postSeededData);
app.use('/auth', useAuthRouter);
app.use('/middlewareApi', AuthMiddlewareWithApi)


app.get('/', (req: Request, res: Response) => {
  res.send("Hello Port is working");
  console.log('HIii');
});

app.get('/users', (req: Request, res: Response) => {
  console.log('Hello');
  res.json(users);
});
app.get('/example', (req, res) => {
  // This error will be caught by the errorHandler middleware
  throw new Error('Something went wrong!');
});
app.get('/chain-example', logger, checkAuth, addTimestamp, (req: Request, res: Response) => {
  res.json({
    message: 'All middleware passed successfully!',
    requestTime: (req as any).requestTime,
  });
});

app.use(errorHandler);
app.listen(PORT, () => {
  console.log("server");
  console.log(`Server is running at http://localhost:3000`);
});
