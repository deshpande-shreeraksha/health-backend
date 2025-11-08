const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

router.post('/', async (req, res) => {
  const newDoctor = new Doctor(req.body);
  await newDoctor.save();
  res.status(201).json(newDoctor);
});

module.exports = router;

