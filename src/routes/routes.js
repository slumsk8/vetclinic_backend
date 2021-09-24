const express = require('express');
const PetController = require('../controllers/PetController');
const TutorController = require('../controllers/TutorController');
const DoctorController = require('../controllers/DoctorController');
const Consultation = require('../controllers/ConsultationController');

const route = express.Router();

// tutor
route.post('/tutor', TutorController.createTutor);
route.get('/tutors', TutorController.findAllTutors);
route.get('/tutor/:id', TutorController.findTutorById);
route.delete('/tutor/:id', TutorController.deletTutor);

//veterinary
route.post('/doctor', DoctorController.createDoctor);
route.get('/doctors', DoctorController.findAllDoctors);
route.get('/doctor/:id', DoctorController.findDoctorById);
route.delete('/doctor/:id', DoctorController.deletDoctor);

//pet
route.post('/tutor/:id_tutor/pet', PetController.createPet);
route.get('/tutor/:id_tutor/pets', PetController.findAllPets);
route.get('/pet/:id', PetController.findPetById);
route.delete('/pet/:id', PetController.deletPet);

//veterinay consultation
route.post('/doctor/:id_doctor/tutor/:id_tutor/pet/:id_pet/consultation', Consultation.createConsultation);//criar as consultas
route.get('/doctor/:id_doctor/consultations', Consultation.findAllConsultationsForDoctor);//busca consulta pelo doutor
route.get('/pet/:id_pet/consultations', Consultation.findAllConsultationsForDoctor);//busca consulta pelo pet
route.get('/tutor/:id_tutor/consultations', Consultation.findAllConsultationsForDoctor);//busca consulta pelo tutor
route.get('/consultations', Consultation.findAllConsultations);//busca todas as consultas
route.get('/consultation/:id', Consultation.findConsultationById);//busca determinada consulta pelo id
route.delete('/consultation/:id', Consultation.deletConsultation);//deleta a consulta


module.exports = route;