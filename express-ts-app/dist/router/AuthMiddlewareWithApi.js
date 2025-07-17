"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const GenerateMockdata_1 = require("../utils/GenerateMockdata");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
const SECRET_KEY = auth_1.secretkey;
// it will check the login creaditional 
router.post('/login', (req, res) => {
    const username = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    const user = { name: username }; // create a payload
    const token = jsonwebtoken_1.default.sign(user, SECRET_KEY, { expiresIn: '1h' }); // create a token
    res.json({ token });
});
// check the token 
router.post('/authenticate', auth_1.authenticateToken, (req, res) => {
    const receivedData = req.body; // data, I want to add in my mockdata
    if (!receivedData || !receivedData.name) {
        return res.status(400).json({ message: 'Invalid user data' });
    }
    GenerateMockdata_1.mockUsers.push(receivedData);
    console.log('User added:', receivedData);
    res.json({
        message: '✅ User data received and added successfully',
        data: receivedData,
    });
});
router.get('/protectedData', (req, res) => {
    res.json({
        message: '✅ You have accessed a protected route!',
        data: GenerateMockdata_1.mockUsers,
        user: req.user,
    });
});
exports.default = router;
