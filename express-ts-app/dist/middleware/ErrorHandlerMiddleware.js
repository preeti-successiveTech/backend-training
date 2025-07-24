"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerMiddleware = void 0;
class ErrorHandlerMiddleware {
    handle(err, req, res, next) {
        console.error('Error:', err);
        const statusCode = err.status || 500;
        const message = err.message || 'Internal Server Error';
        res.status(statusCode).json({
            error: true,
            message,
        });
    }
}
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
