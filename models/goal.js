const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  title: { type: String },
  measurement: { type: String},
  duration: { type: String },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
