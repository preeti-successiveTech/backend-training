import dotenv from "dotenv";
import { CountrySeeder } from "./CountrySeeder";
dotenv.config();
const DB_URI= process.env.MONGO_URI;

if (!DB_URI) {
  throw new Error("MONGO_URI environment variable is not set");
}
const seeder = new CountrySeeder(DB_URI);
seeder.run();