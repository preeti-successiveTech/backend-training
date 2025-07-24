"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicValidationMiddleware = void 0;
const express_validator_1 = require("express-validator");
const validationRules_1 = require("../config/validationRules");
class DynamicValidationMiddleware {
    handle() {
        return async (req, res, next) => {
            const path = req.route?.path;
            const schema = path ? validationRules_1.validationRules[path] : undefined;
            if (schema) {
                await (0, express_validator_1.checkSchema)(schema).run(req);
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty()) {
                    res.status(400).json({ errors: errors.array() });
                    return;
                }
            }
            next();
        };
    }
}
exports.DynamicValidationMiddleware = DynamicValidationMiddleware;
