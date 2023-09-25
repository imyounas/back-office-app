const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    refrencePersonName: {
        type: String,
        required: true,
      },
    engagementStartDate: {
        type: Date,
        required: true,
        default: new Date(),
      },
},
{ timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
