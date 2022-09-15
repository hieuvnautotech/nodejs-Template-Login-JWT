const mongoose = require("mongoose");
const moment = require("moment");
const { date } = require("@hapi/joi/lib/template");

var schema = new mongoose.Schema({
  esdName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // pinSw: {
  //   type: String,
  //   required: true,
  // },

  date: {
    type: String,
    // default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  },
});

const iotInfoDb = mongoose.model("iotinfo", schema);

module.exports = iotInfoDb;
