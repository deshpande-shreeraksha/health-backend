const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    enum: ['Online', 'Offline'],
    default: 'Online'
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);
