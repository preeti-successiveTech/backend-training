"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GeoLocationMiddleware_1 = require("../middleware/GeoLocationMiddleware");
const router = express_1.default.Router();
const allowedCountries = ['US', 'CA', 'IN'];
const geoLocationMiddleware = new GeoLocationMiddleware_1.GeoLocationMiddleware(allowedCountries);
router.get('/Location', geoLocationMiddleware.handle(), (req, res) => {
    res.status(200).json({ message: 'Access granted: You are in an authorized location.' });
});
exports.default = router;
