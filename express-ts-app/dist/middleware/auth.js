"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.secretkey = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.secretkey = "Preeti";
const authenticateToken = (req, res, next) => {
    const authorization = req.headers['authorization'];
    const token = authorization && authorization.split(' ')[1]; // Bearer token
    if (!token) {
        return res.status(400).json({ message: 'Authentication denied' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, exports.secretkey);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
};
exports.authenticateToken = authenticateToken;
