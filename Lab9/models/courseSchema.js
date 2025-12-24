
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  instructionName: {
    type: String,
    required: true
  },
  price: {
    type: mongoose.Decimal128,
    required: true
  },
  category: {
    type: String,
    enum: ['Web Development', 'Design', 'Marketing'],
    default: 'Web Development'
  },
  numberEnrolled: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Course', courseSchema);
