const Clinic = require("../models/clinic");
const Patient = require("../models/patient");
const mongoose = require('mongoose');

async function createClinic(clinicData) {
    let aClinic = new Clinic(clinicData);
    await aClinic.save();
}

async function fetchAllPatients() {
    let clinics = await Clinic.find().exec();
    return clinics.map(clinic => clinic.toObject());
}

module.exports = {
    listAllClinicsPage: async function (req, res) {
        const clinics = await fetchAllClinics();
        res.render("listClinics", {clinics: clinics});
    },

    addClinicPage: function (req, res) {
        res.render("addClinic");
    },


    addClinic: async function (req, res) {
        try {
            // Validate input data
            if (!req.body.name ||
                !req.body.address) {

                // return res.status(400).render('errorPage', {message: 'Invalid input data'});

                return res.status(400)
            }
    
            await createClinic({
                name: req.body.name,
                address: req.body.address,
            });
            
            res.redirect("/clinics");
        } catch (error) {
            console.error("Error adding event:", error);
            res.status(500).render('errorPage', {message: 'Internal server error while adding event.'});
        }
    },
};