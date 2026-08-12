import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";

const seedAdmin = async () => {
  try {
    console.log("1. Connecting Database...");
    await connectDB();

    console.log("2. Checking existing admin...");
    const existingAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists.");
      process.exit(0);
    }

    console.log("3. Creating admin...");

    const admin = await Admin.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });

    console.log("4. Admin Created:");
    console.log(admin);

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeder Error:");
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();