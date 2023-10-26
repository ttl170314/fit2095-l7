const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 1, max: 120 },
    address: { type: String, default: 'Australia' }
});

module.exports = mongoose.model('Patient', PatientSchema);
