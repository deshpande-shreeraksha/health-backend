const express = require('express');
const router = express.Router();
const Medication = require('../models/Medication');

router.get('/', async (req, res) => {
  const meds = await Medication.find();
  res.json(meds);
});

router.post('/', async (req, res) => {
  const newMed = new Medication(req.body);
  await newMed.save();
  res.status(201).json(newMed);
});

module.exports = router;
