"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const GenerateMockdata_1 = require("../utils/GenerateMockdata");
const AuthenticateTokenMiddleware_1 = require("../middleware/AuthenticateTokenMiddleware");
const router = express_1.default.Router();
const SECRET_KEY = 'Preeti';
const mockDataGenerator = new GenerateMockdata_1.GenerateMockdata();
const mockUsers = mockDataGenerator.generateUsers(5);
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
router.post('/authenticate', authenticateTokenMiddleware.handle(), (req, res) => {
    const receivedData = req.body;
    if (!receivedData || !receivedData.name) {
        return res.status(400).json({ message: 'Invalid user data' });
    }
    mockUsers.push(receivedData);
    console.log('User added:', receivedData);
    res.json({
        message: '✅ User data received and added successfully',
        data: receivedData,
    });
});
router.get('/protectedData', authenticateTokenMiddleware.handle(), (req, res) => {
    res.json({
        message: '✅ You have accessed a protected route!',
        data: mockUsers,
        user: req.user,
    });
});
exports.default = router;
