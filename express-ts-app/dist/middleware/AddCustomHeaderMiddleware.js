"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCustomHeaderMiddleware = void 0;
class AddCustomHeaderMiddleware {
    constructor(headerName, headerValue) {
        this.headerName = headerName;
        this.headerValue = headerValue;
    }
    handle() {
        return (req, res, next) => {
            res.setHeader(this.headerName, this.headerValue);
            next();
        };
    }
}
exports.AddCustomHeaderMiddleware = AddCustomHeaderMiddleware;
