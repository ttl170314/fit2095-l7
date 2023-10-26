const express = require('express');
const clinicController = require("../controllers/clinic-controller");
const patientController = require("../controllers/patient-controller");
const router = express.Router();

/**
 * @route GET /clinics
 * @description Render the page listing all clinics.
 */
router.get("/clinics", clinicController.listAllClinicsPage);

/**
 * @route GET /clinic/add
 * @description Render the page to add a new event.
 */
router.get("/clinic/add", clinicController.addClinicPage);

/**
 * @route POST /clinic/add
 * @description Create a new event.
 */
router.post("/clinic/add", clinicController.addClinic);




/**
 * @route GET /clinics
 * @description Render the page listing all clinics.
 */
router.get("/patients", patientController.listAllPatientsPage);

/**
 * @route GET /clinic/add
 * @description Render the page to add a new event.
 */
router.get("/patient/add", patientController.addPatientPage);

/**
 * @route POST /clinic/add
 * @description Create a new event.
 */
router.post("/patient/add", patientController.addPatient);




module.exports = router;
