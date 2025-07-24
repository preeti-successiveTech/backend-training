"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const CountrySeeder_1 = require("./CountrySeeder");
dotenv_1.default.config();
const DB_URI = process.env.MONGO_URI;
if (!DB_URI) {
    throw new Error("MONGO_URI environment variable is not set");
}
const seeder = new CountrySeeder_1.CountrySeeder(DB_URI);
seeder.run();
