"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Mockdata_1 = require("./utils/Mockdata");
const mockUserRoutes_1 = __importDefault(require("./router/mockUserRoutes"));
const postSeededData_1 = __importDefault(require("./router/postSeededData"));
const userAuthRouter_1 = __importDefault(require("./router/userAuthRouter"));
const AuthMiddlewareWithApi_1 = __importDefault(require("./router/AuthMiddlewareWithApi"));
const customLoggingMiddleware_1 = require("./middleware/customLoggingMiddleware");
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(customLoggingMiddleware_1.requestLogger);
app.use('/mockUsers', mockUserRoutes_1.default);
app.use('/data', postSeededData_1.default);
app.use('/auth', userAuthRouter_1.default);
app.use('/middlewareApi', AuthMiddlewareWithApi_1.default);
app.get('/', (req, res) => {
    res.send("Hello Port is working");
    console.log('HIii');
});
app.get('/users', (req, res) => {
    console.log('Hello');
    res.json(Mockdata_1.users);
});
app.get('/example', (req, res) => {
    // This error will be caught by the errorHandler middleware
    throw new Error('Something went wrong!');
});
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log("server");
    console.log(`Server is running at http://localhost:3000`);
});
