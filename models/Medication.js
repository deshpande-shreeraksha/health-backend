const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: String,
  dosage: String,
  reminderTime: String,
});

module.exports = mongoose.model('Medication', medicationSchema);
