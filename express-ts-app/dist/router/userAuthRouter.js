"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthenticateTokenMiddleware_1 = require("../middleware/AuthenticateTokenMiddleware");
const router = express_1.default.Router();
const SECRET_KEY = 'Preeti'; // Or import from config/env
// Instantiate middleware class with the secret key
const authenticateTokenMiddleware = new AuthenticateTokenMiddleware_1.AuthenticateTokenMiddleware(SECRET_KEY);
router.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    const user = { name: username };
    const token = jsonwebtoken_1.default.sign(user, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});
// Use the class middleware's handle() method here
router.get('/protected', authenticateTokenMiddleware.handle(), (req, res) => {
    res.json({ message: '✅ You have accessed a protected route!', user: req.user });
});
router.get('/error', (req, res, next) => {
    next((0, http_errors_1.default)(400, 'This is a simulated error.'));
});
exports.default = router;
