"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateNumericQuery = void 0;
class ValidateNumericQuery {
    constructor(paramNames) {
        this.paramNames = paramNames;
    }
    handle() {
        return (req, res, next) => {
            for (const param of this.paramNames) {
                const value = req.query[param];
                if (value !== undefined) {
                    if (Array.isArray(value)) {
                        res.status(400).json({ error: `Query parameter '${param}' must be a single numeric value.` });
                        return;
                    }
                    if (isNaN(Number(value))) {
                        res.status(400).json({ error: `Query parameter '${param}' must be numeric.` });
                        return;
                    }
                }
            }
            next();
        };
    }
}
exports.ValidateNumericQuery = ValidateNumericQuery;
