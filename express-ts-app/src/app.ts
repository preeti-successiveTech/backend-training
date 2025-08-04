import express, { Request, Response, NextFunction } from "express";
import { users } from "./utils/Mockdata";
import helmet from "helmet";
import { AddCustomHeaderMiddleware } from "./middleware/AddCustomHeaderMiddleware";
import { RequestLoggerMiddleware } from "./middleware/RequestLoggerMiddleware";
import { ErrorHandlerMiddleware } from "./middleware/ErrorHandlerMiddleware";
import { MultiMiddleware } from "./middleware/MultiMiddleware";
import { SimpleRateLimiter } from "./middleware/SimpleRateLimiter";
import { HealthCheckController } from "./controllers/HealthCheckController";

import mockUserRoutes from "./router/mockUserRoutes";
import postSeededData from "./router/postSeededData";
import useAuthRouter from "./router/userAuthRouter";
import AuthMiddlewareWithApi from "./router/AuthMiddlewareWithApi";
import userAuthValidate from "./router/userAuthValidate";
import numericRoute from "./router/numericRoute";
import dynamicRoute from "./router/dynamicRoute";
import userLocationRoute from "./router/userLocationRoute";
import testError from "./router/testError";
import asyncErrorRoute from "./router/asyncRoute";
import parameterRequest from "./router/parameterRequest";
import authRoute from "./router/authRoute";
import dotenv from "dotenv";

import { connectDB } from './config/db';
import userRoutes from './router/userRoute';
import mongoose from "mongoose";
import { SecurityHeader } from "./middleware/SecurityHeader";

dotenv.config();

const app = express();
const PORT = 3000;

const addCustomHeader = new AddCustomHeaderMiddleware(
  "Preeti-Custom-header",
  "MyExpressApp"
);
const requestLogger = new RequestLoggerMiddleware();
const errorHandler = new ErrorHandlerMiddleware();
const multiMiddleware = new MultiMiddleware();
const simpleRateLimiter = new SimpleRateLimiter(5);
const healthCheckController = new HealthCheckController();

app.use(express.json());
mongoose.connect(process.env.MONGO_URI!);

app.use(helmet);

app.use("/RateLimiter",simpleRateLimiter.handle());
app.use(addCustomHeader.handle());
app.use(requestLogger.handle());

app.use(SecurityHeader.headerProtection)


// Routes
app.use("/mockUsers", mockUserRoutes);
app.use("/data", postSeededData);
app.use("/auth", useAuthRouter);
app.use("/middlewareApi", AuthMiddlewareWithApi);
app.use("/", userAuthValidate);
app.use("/", numericRoute);
app.use("/dynamic", dynamicRoute);
app.use("/allowedCounteries", userLocationRoute);
app.use("/api/test-errors", testError);
app.use("/api/asyncError", asyncErrorRoute);
app.use("/parameter", parameterRequest);
app.use("/", healthCheckController.router);
app.use('/api/auth', authRoute);

connectDB().catch(console.error);

app.use('/databaseApi', userRoutes);

if (!process.env.JWT_SECRET) {
  throw new Error('Missing JWT_SECRET in environment');
}

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Port is working");
  console.log("HIii");
});

app.get("/users", (req: Request, res: Response) => {
  console.log("Hello");
  res.json(users);
});

app.get("/example", (req: Request, res: Response) => {
  throw new Error("Something went wrong!");
});

// Using MultiMiddleware methods: logger, checkAuth, addTimestamp
app.get(
  "/chain-example",
  multiMiddleware.logger(),
  multiMiddleware.checkAuth(),
  multiMiddleware.addTimestamp(),
  (req: Request, res: Response) => {
    res.json({
      message: "All middleware passed successfully!",
      requestTime: (req as any).requestTime,
    });
  }
);

// 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error("Not Found") as Error & { status: number };
  err.status = 404;
  next(err);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) =>
  errorHandler.handle(err, req, res, next)
);

app.listen(PORT, () => {
  console.log("server");
  console.log(`Server is running at http://localhost:${PORT}`);
});
