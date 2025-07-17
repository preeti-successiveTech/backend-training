"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error('Error:', err);
    const statusCode = err.status || 500; // Default to 500 if no status provided
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        error: true,
        message,
    });
}
