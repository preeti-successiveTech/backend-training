"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckController = void 0;
// controllers/HealthCheckController.ts
const express_1 = require("express");
class HealthCheckController {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/health', this.checkHealth);
    }
    checkHealth(req, res) {
        const uptimeInSeconds = process.uptime().toFixed(2);
        res.status(200).json({
            status: 'ok',
            uptime: `${uptimeInSeconds}s`,
            timestamp: new Date().toISOString(),
        });
    }
}
exports.HealthCheckController = HealthCheckController;
