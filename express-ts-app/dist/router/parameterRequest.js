"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const router = express_1.default.Router();
router.get('/validate/:username', (req, res, next) => {
    const { username } = req.params;
    const age = Number(req.query.age);
    if (!username || username.length < 3) {
        return next((0, http_errors_1.default)(400, 'Username is required and must be at least 3 characters long.'));
    }
    if (!age || isNaN(age) || age < 18) {
        return next((0, http_errors_1.default)(400, 'Age query parameter is required and must be a number greater than or equal to 18.'));
    }
    res.json({
        message: `User ${username} is valid with age ${age}.`,
    });
});
exports.default = router;
