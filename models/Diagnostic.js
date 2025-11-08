const mongoose = require('mongoose');

const diagnosticSchema = new mongoose.Schema({
  type: String,     // e.g., blood, urine, covid
  result: String,   // e.g., positive, normal
  date: Date,
});

module.exports = mongoose.model('Diagnostic', diagnosticSchema);
