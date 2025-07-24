"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ValidateNumericQuery_1 = require("../middleware/ValidateNumericQuery");
const router = express_1.default.Router();
const validateNumericQueryMiddleware = new ValidateNumericQuery_1.ValidateNumericQuery(['page', 'limit']);
router.get('/items', validateNumericQueryMiddleware.handle(), (req, res) => {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    res.json({ message: 'Valid query params!', page, limit });
});
exports.default = router;
