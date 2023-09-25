const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "employee",
      enum: ["employee", "admin", "super-admin"]
    },
    Description: {
        type: String,
        required: true,
      },
    clients: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Client",
        },
      ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeReview",
      },
    ],
    leaves: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "EmployeeLeave",
        },
      ]

  },
  {
    timestamps: true,
  }
);

//model
const User = mongoose.model("User", userSchema);

module.exports = User;
