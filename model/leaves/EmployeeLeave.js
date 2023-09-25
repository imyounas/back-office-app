const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const employeeLeaveSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },
    leaveDate: {
        type: Date,
        required: true,
        default: new Date(),
    },
    duration: {
        type: Number,
        required: true,
        default: 1,
      },
    employeeComments: {
        type: String,
        required: true,
      },
      managerApproval: {
        type: Boolean, 
        required: true,
        default: false     
      },
      managerComments: {
        type: String,      
      },
},
{ timestamps: true }
);

const EmployeeLeave = mongoose.model("EmployeeLeave", employeeLeaveSchema);

module.exports = EmployeeLeave;
