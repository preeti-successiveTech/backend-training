"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ValidateRegistration_1 = require("../middleware/ValidateRegistration");
const router = express_1.default.Router();
const validateRegistration = new ValidateRegistration_1.ValidateRegistration();
router.post('/register', validateRegistration.handle(), (req, res) => {
    res.status(200).json({
        message: '✅ Registration successful!',
        user: req.body,
    });
});
exports.default = router;
