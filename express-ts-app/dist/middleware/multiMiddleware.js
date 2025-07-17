"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware 1: Log request details
function logger(req, res, next) {
    console.log(`Logger: ${req.method} ${req.url}`);
    next();
}
// Middleware 2: Check if user is authenticated (dummy check)
function checkAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized: No auth header' });
    }
    console.log('Auth header present, proceeding');
    next();
}
// Middleware 3: Add a timestamp to request object
function addTimestamp(req, res, next) {
    req.requestTime = new Date().toISOString();
    next();
}
// Route using chained middleware
app.get('/chain-example', logger, checkAuth, addTimestamp, (req, res) => {
    res.json({
        message: 'All middleware passed successfully!',
        requestTime: req.requestTime,
    });
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
