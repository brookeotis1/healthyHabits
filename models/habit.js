const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    goalName: {
        type: String,
        required: true
    },
    measurement: {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    }

});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;