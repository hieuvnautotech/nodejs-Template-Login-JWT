const mongoose = require("mongoose");
const moment = require("moment");
const { date } = require("@hapi/joi/lib/template");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pinLed: {
    type: String,
    required: true,
  },
  pinSw: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    // default: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  },
});

const IOTdb = mongoose.model("iotdb", schema);

module.exports = IOTdb;
