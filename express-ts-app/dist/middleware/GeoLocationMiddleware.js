"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoLocationMiddleware = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
class GeoLocationMiddleware {
    constructor(allowedCountries) {
        this.allowedCountries = allowedCountries;
    }
    handle() {
        return (req, res, next) => {
            const ip = "115.97.0.1";
            const geo = geoip_lite_1.default.lookup(ip);
            if (geo && this.allowedCountries.includes(geo.country)) {
                next();
            }
            else {
                res.status(403).json({ message: 'Access denied: Your geographic location is not authorized.' });
            }
        };
    }
}
exports.GeoLocationMiddleware = GeoLocationMiddleware;
