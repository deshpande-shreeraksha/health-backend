const express = require('express');
const router = express.Router();
const Diagnostic = require('../models/Diagnostic');

router.get('/', async (req, res) => {
  const diagnostics = await Diagnostic.find();
  res.json(diagnostics);
});

router.post('/', async (req, res) => {
  const newDiagnostic = new Diagnostic(req.body);
  await newDiagnostic.save();
  res.status(201).json(newDiagnostic);
});

module.exports = router;
