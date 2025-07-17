"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GenerateMockdata_1 = require("../utils/GenerateMockdata");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json(GenerateMockdata_1.mockUsers);
});
exports.default = router;
