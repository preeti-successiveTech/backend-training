"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Mockdata_1 = require("./utils/Mockdata");
const AddCustomHeaderMiddleware_1 = require("./middleware/AddCustomHeaderMiddleware");
const RequestLoggerMiddleware_1 = require("./middleware/RequestLoggerMiddleware");
const ErrorHandlerMiddleware_1 = require("./middleware/ErrorHandlerMiddleware");
const MultiMiddleware_1 = require("./middleware/MultiMiddleware");
const SimpleRateLimiter_1 = require("./middleware/SimpleRateLimiter");
const HealthCheckController_1 = require("./controllers/HealthCheckController");
const mockUserRoutes_1 = __importDefault(require("./router/mockUserRoutes"));
const postSeededData_1 = __importDefault(require("./router/postSeededData"));
const userAuthRouter_1 = __importDefault(require("./router/userAuthRouter"));
const AuthMiddlewareWithApi_1 = __importDefault(require("./router/AuthMiddlewareWithApi"));
const userAuthValidate_1 = __importDefault(require("./router/userAuthValidate"));
const numericRoute_1 = __importDefault(require("./router/numericRoute"));
const dynamicRoute_1 = __importDefault(require("./router/dynamicRoute"));
const userLocationRoute_1 = __importDefault(require("./router/userLocationRoute"));
const testError_1 = __importDefault(require("./router/testError"));
const asyncRoute_1 = __importDefault(require("./router/asyncRoute"));
const parameterRequest_1 = __importDefault(require("./router/parameterRequest"));
const authRoute_1 = __importDefault(require("./router/authRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const userRoute_1 = __importDefault(require("./router/userRoute"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
const addCustomHeader = new AddCustomHeaderMiddleware_1.AddCustomHeaderMiddleware("Preeti-Custom-header", "MyExpressApp");
const requestLogger = new RequestLoggerMiddleware_1.RequestLoggerMiddleware();
const errorHandler = new ErrorHandlerMiddleware_1.ErrorHandlerMiddleware();
const multiMiddleware = new MultiMiddleware_1.MultiMiddleware();
const simpleRateLimiter = new SimpleRateLimiter_1.SimpleRateLimiter(5);
const healthCheckController = new HealthCheckController_1.HealthCheckController();
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGO_URI);
app.use("/RateLimiter", simpleRateLimiter.handle());
app.use(addCustomHeader.handle());
app.use(requestLogger.handle());
// Routes
app.use("/mockUsers", mockUserRoutes_1.default);
app.use("/data", postSeededData_1.default);
app.use("/auth", userAuthRouter_1.default);
app.use("/middlewareApi", AuthMiddlewareWithApi_1.default);
app.use("/", userAuthValidate_1.default);
app.use("/", numericRoute_1.default);
app.use("/dynamic", dynamicRoute_1.default);
app.use("/allowedCounteries", userLocationRoute_1.default);
app.use("/api/test-errors", testError_1.default);
app.use("/api/asyncError", asyncRoute_1.default);
app.use("/parameter", parameterRequest_1.default);
app.use("/", healthCheckController.router);
app.use('/api/auth', authRoute_1.default);
(0, db_1.connectDB)().catch(console.error);
app.use('/databaseApi', userRoute_1.default);
app.get("/", (req, res) => {
    res.send("Hello Port is working");
    console.log("HIii");
});
app.get("/users", (req, res) => {
    console.log("Hello");
    res.json(Mockdata_1.users);
});
app.get("/example", (req, res) => {
    throw new Error("Something went wrong!");
});
// Using MultiMiddleware methods: logger, checkAuth, addTimestamp
app.get("/chain-example", multiMiddleware.logger(), multiMiddleware.checkAuth(), multiMiddleware.addTimestamp(), (req, res) => {
    res.json({
        message: "All middleware passed successfully!",
        requestTime: req.requestTime,
    });
});
// 404 handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => errorHandler.handle(err, req, res, next));
app.listen(PORT, () => {
    console.log("server");
    console.log(`Server is running at http://localhost:${PORT}`);
});
