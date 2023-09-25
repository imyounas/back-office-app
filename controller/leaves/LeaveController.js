const AysncHandler = require("express-async-handler");
const { model } = require("mongoose");
const EmployeeLeave = require("../../model/leaves/EmployeeLeave");

exports.addNewLeave = AysncHandler(async(req,res) => {
   
    const { leaveDate, duration, employeeComments, employeeName } = req.body;
    console.log(`in the POST AysncHandler AddNewLeave handler`);

  res.status(201).json({
    status: "success",
    message: "Employee Leave added created successfully"
  });

});

exports.addNewLeaveGet =AysncHandler(async(req,res) => {

    console.log(`in the GET AysncHandler addNewLeaveGet handler`);

  res.status(200).json({
    status: "success",
    message: "Employee Leave added created successfully"
  });

});

