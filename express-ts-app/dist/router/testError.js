"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const router = express_1.default.Router();
const errorRoutes = {
    '400': (req, res, next) => next((0, http_errors_1.default)(400, 'Bad Request Example')),
    '401': (req, res, next) => next((0, http_errors_1.default)(401, 'Unauthorized Access')),
    '403': (req, res, next) => next((0, http_errors_1.default)(403, 'Forbidden Resource')),
    '404': (req, res, next) => next((0, http_errors_1.default)(404, 'Custom Not Found')),
    '405': (req, res, next) => next((0, http_errors_1.default)(405, 'POST Not Allowed Here')),
    '409': (req, res, next) => next((0, http_errors_1.default)(409, 'Conflict Example')),
    '422': (req, res, next) => next((0, http_errors_1.default)(422, 'Unprocessable Data')),
    '500': (req, res, next) => next((0, http_errors_1.default)(500, 'Internal Server Error Example')),
    '502': (req, res, next) => next((0, http_errors_1.default)(502, 'Bad Gateway Example')),
    '503': (req, res, next) => next((0, http_errors_1.default)(503, 'Service Unavailable')),
    '504': (req, res, next) => next((0, http_errors_1.default)(504, 'Gateway Timeout')),
};
for (const [code, handler] of Object.entries(errorRoutes)) {
    const method = code === '405' ? 'post' : 'get';
    router[method](`/${code}`, handler);
}
exports.default = router;
