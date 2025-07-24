"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLoggerMiddleware = void 0;
class RequestLoggerMiddleware {
    handle() {
        return (req, res, next) => {
            const method = req.method;
            const url = req.originalUrl;
            const timestamp = new Date().toISOString();
            console.log(`[${timestamp}] ${method} ${url}`);
            next();
        };
    }
}
exports.RequestLoggerMiddleware = RequestLoggerMiddleware;
