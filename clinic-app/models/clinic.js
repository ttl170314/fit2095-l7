const mongoose = require('mongoose');

const ClinicSchema = new mongoose.Schema({
    name: { type: String, default: 'FIT2095 Clinic' },
    address: { type: String, default: 'Australia' },
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }]
});

module.exports = mongoose.model('Clinic', ClinicSchema);
