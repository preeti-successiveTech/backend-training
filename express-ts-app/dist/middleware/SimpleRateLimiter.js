"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleRateLimiter = void 0;
class SimpleRateLimiter {
    constructor(maxRequests) {
        this.requestCounts = {};
        this.maxRequests = maxRequests;
    }
    handle() {
        return (req, res, next) => {
            const ip = req.ip || 'unknown';
            if (!this.requestCounts[ip]) {
                this.requestCounts[ip] = 1;
            }
            else {
                this.requestCounts[ip]++;
            }
            if (this.requestCounts[ip] > this.maxRequests) {
                res.status(429).json({
                    error: 'Too many requests!',
                    totalRequests: this.requestCounts[ip],
                });
                return;
            }
            console.log(`IP: ${ip}, Request Count: ${this.requestCounts[ip]}`);
            next();
        };
    }
}
exports.SimpleRateLimiter = SimpleRateLimiter;
