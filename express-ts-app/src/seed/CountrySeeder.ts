import mongoose from "mongoose";
import { Country } from "../models/Country";
import { COUNTRIES } from "./counteries";
export class CountrySeeder {
  constructor(private dbUri: string) {}

  public async run(): Promise<void> {
    try {
      await mongoose.connect(this.dbUri);
      console.log("MongoDB connected");

      await Country.deleteMany({});
      console.log("Old countries removed");

      await Country.insertMany(COUNTRIES);
      console.log("New countries inserted");
    } catch (err) {
      console.error("Seeding failed:", err);
    } finally {
      await mongoose.disconnect();
      console.log("MongoDB disconnected");
    }
  }
}

