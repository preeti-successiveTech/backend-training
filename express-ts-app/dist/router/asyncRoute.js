"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const router = express_1.default.Router();
router.get("/", async (req, res, next) => {
    try {
        await Promise.reject((0, http_errors_1.default)(500, "Intentional async error occurred!"));
        res.send("Success");
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
