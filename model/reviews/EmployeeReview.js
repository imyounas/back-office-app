const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const employeeReviewSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },    
    employeeName: {
      type: String,
      required: true,
    },
    employeeComments: {
        type: String,
        required: true,
      },
      managerComments: {
        type: String
      },
},
{ timestamps: true }
);

const EmployeeReview = mongoose.model("EmployeeReview", employeeReviewSchema);

module.exports = EmployeeReview;
