const express = require("express");
const leaveRouter = express.Router();

const {
    addNewLeave,
    addNewLeaveGet
  } = require("../../controller/leaves/LeaveController");

  leaveRouter
  .route("/")
  .get(addNewLeaveGet)
  .post(addNewLeave);
  
module.exports = leaveRouter;
