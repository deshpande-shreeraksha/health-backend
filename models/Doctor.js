const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  location: String,
  mode: String, // online or offline
});

module.exports = mongoose.model('Doctor', doctorSchema);
