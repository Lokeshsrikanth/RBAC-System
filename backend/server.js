const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const User = require("./models/User");  // ADD THIS

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Auto-create Admin, Manager, User
async function createDefaultUsers() {
  const users = [
    {
      name: "Admin User",
      email: "admin@rbac.com",
      password: "Admin@123",
      role: "admin",
    },
    {
      name: "Manager User",
      email: "manager@rbac.com",
      password: "Manager@123",
      role: "manager",
    },
    {
      name: "Normal User",
      email: "user@rbac.com",
      password: "User@123",
      role: "user",
    },
  ];

  for (let u of users) {
    const exists = await User.findOne({ email: u.email });
    if (!exists) {
      await User.create(u);
      console.log(`✔ Created: ${u.email}`);
    }
  }
}

createDefaultUsers();  // RUN THIS after DB connection

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => res.send("RBAC Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
