const Clinic = require("../models/clinic");
const Patient = require("../models/patient");
const mongoose = require('mongoose');

async function createClinic(clinicData) {
    let aClinic = new Clinic(clinicData);
    await aClinic.save();
}

async function fetchAllPatients() {
    let patients = await Patient.find().exec();
    return patients.map(patient => patient.toObject());
}

module.exports = {
    listAllPatientsPage: async function (req, res) {
        const patients = await fetchAllPatients();
        res.render("listPatients", {patients: patients});
    },

    addPatientPage: function (req, res) {
        res.render("addPatient");
    },


    addPatient: async function (req, res) {
        try {
            // Validate input data
            if (!req.body.name ||
                !req.body.address ||
                !req.body.age) {

                return res.status(400).render('errorPage', {message: 'Invalid input data'});
            }
    
            await createClinic({
                name: req.body.name,
                address: req.body.address,
                age: req.body.age
            });
            
            res.redirect("/patients");
        } catch (error) {
            console.error("Error adding event:", error);
            res.status(500).render('errorPage', {message: 'Internal server error while adding event.'});
        }
    },
};