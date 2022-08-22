const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  tittle: {
    type: String,
    trim: true,
    required: true,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
