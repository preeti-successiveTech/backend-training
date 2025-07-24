"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiMiddleware = void 0;
class MultiMiddleware {
    logger() {
        return (req, res, next) => {
            console.log(`Logger: ${req.method} ${req.url}`);
            next();
        };
    }
    checkAuth() {
        return (req, res, next) => {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                res.status(401).json({ error: 'Unauthorized: No auth header' });
                return;
            }
            console.log('Auth header present, proceeding');
            next();
        };
    }
    addTimestamp() {
        return (req, res, next) => {
            req.requestTime = new Date().toISOString();
            next();
        };
    }
}
exports.MultiMiddleware = MultiMiddleware;
