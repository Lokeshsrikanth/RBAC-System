const mongoose = require("mongoose");
// Correct import
const User = require("../models/User");
const bcrypt = require("bcryptjs");require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await User.deleteMany();

    const users = [
      {
        name: "Admin User",
        email: "admin@rbac.com",
        password: await bcrypt.hash("Admin@123", 10),
        role: "admin",
      },
      {
        name: "Manager User",
        email: "manager@rbac.com",
        password: await bcrypt.hash("Manager@123", 10),
        role: "manager",
      },
      {
        name: "Normal User",
        email: "user@rbac.com",
        password: await bcrypt.hash("User@123", 10),
        role: "user",
      }
    ];

    await User.insertMany(users);
    console.log("Users created with hashed passwords!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedUsers();
