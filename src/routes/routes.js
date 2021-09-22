const express = require('express');
const PetController = require('../controllers/PetController');
const TutorController = require('../controllers/TutorController');

const route = express.Router();

route.post('/tutor', TutorController.createTutor);
route.get('/tutors', TutorController.findAllTutors);
route.get('/tutor/:id', TutorController.findTutorById);
route.delete('/tutor/:id', TutorController.deletTutor);

route.post('/tutor/:id_tutor/pet', PetController.createPet);
route.get('/tutor/:id_tutor/pets', PetController.findAllPets);
route.get('/pet/:id', PetController.findPetById);
route.delete('/pet/:id', PetController.deletPet);

module.exports = route;