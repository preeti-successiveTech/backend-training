"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
const SECRET_KEY = auth_1.secretkey;
router.post('/login', (req, res) => {
    const username = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    const user = { name: username };
    const token = jsonwebtoken_1.default.sign(user, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});
router.get('/protected', auth_1.authenticateToken, (req, res) => {
    res.json({ message: '✅ You have accessed a protected route!', user: req.user });
});
exports.default = router;
