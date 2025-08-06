// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Only allow 'user' or 'admin'
      default: "user", // Default role is 'user'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
