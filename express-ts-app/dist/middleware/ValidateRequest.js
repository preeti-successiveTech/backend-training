"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateRequest = void 0;
class ValidateRequest {
    constructor(schema) {
        this.schema = schema;
    }
    handle() {
        return (req, res, next) => {
            const { error } = this.schema.validate(req.body);
            if (error) {
                res.status(400).json({ error: error.details[0].message });
                return;
            }
            next();
        };
    }
}
exports.ValidateRequest = ValidateRequest;
