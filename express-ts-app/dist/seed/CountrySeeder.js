"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrySeeder = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Country_1 = require("../models/Country");
const counteries_1 = require("./counteries");
class CountrySeeder {
    constructor(dbUri) {
        this.dbUri = dbUri;
    }
    async run() {
        try {
            await mongoose_1.default.connect(this.dbUri);
            console.log("MongoDB connected");
            await Country_1.Country.deleteMany({});
            console.log("Old countries removed");
            await Country_1.Country.insertMany(counteries_1.COUNTRIES);
            console.log("New countries inserted");
        }
        catch (err) {
            console.error("Seeding failed:", err);
        }
        finally {
            await mongoose_1.default.disconnect();
            console.log("MongoDB disconnected");
        }
    }
}
exports.CountrySeeder = CountrySeeder;
