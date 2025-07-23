
import express, { Request, Response } from 'express';
import { users } from './utils/Mockdata';
import { requestLogger } from './middleware/customLoggingMiddleware';
import { errorHandler } from './middleware/errorHandler';
import { logger, checkAuth, addTimestamp } from './middleware/multiMiddleware'
import { addCustomHeader } from './middleware/addCustomHeader';
import { simpleRateLimiter } from './middleware/simpleRateLimiter';

import mockUserRoutes  from './router/mockUserRoutes';
import postSeededData from './router/postSeededData'; 
import useAuthRouter from './router/userAuthRouter'; 
import AuthMiddlewareWithApi from './router/AuthMiddlewareWithApi';
import userAuthValidate from "./router/userAuthValidate";
import numericRoute from "./router/numericRoute";
import dynamicRoute from "./router/dynamicRoute";
import userLocationRoute from "./router/userLocationRoute";
import testError from "./router/testError";
import asyncErrorRoute from "./router/asyncRoute";
import parameterRequest from "./router/parameterRequest";
const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(simpleRateLimiter(5));
app.use(addCustomHeader('Preeti-Custom-header', 'MyExpressApp'));
app.use(requestLogger);
app.use('/mockUsers', mockUserRoutes);
app.use('/data',postSeededData);
app.use('/auth', useAuthRouter);
app.use('/middlewareApi', AuthMiddlewareWithApi);
app.use('/',userAuthValidate);
app.use('/',numericRoute);
app.use('/dynamic',dynamicRoute);
app.use('/allowedCounteries',userLocationRoute);
app.use('/api/test-errors', testError);
app.use('/api/asyncError', asyncErrorRoute);
app.use('/parameter', parameterRequest)
app.get('/', (req: Request, res: Response) => {
  res.send("Hello Port is working");
  console.log('HIii');
});

app.get('/users', (req: Request, res: Response) => {
  console.log('Hello');
  res.json(users);
});
app.get('/example', (req, res) => {
  throw new Error('Something went wrong!');
});
app.get('/chain-example', logger, checkAuth, addTimestamp, (req: Request, res: Response) => {
  res.json({
    message: 'All middleware passed successfully!',
    requestTime: (req as any).requestTime,
  });
});
app.use((req, res, next) => {
  const err = new Error('Not Found') as Error & { status: number };
  err.status = 404;
  next(err);
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log("server");
  console.log(`Server is running at http://localhost:3000`);
});
