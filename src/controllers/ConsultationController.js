const Tutor = require('../models/Tutor');
const Pet = require('../models/Pet');
const Doctor = require('../models/Doctor');
const Consultation = require('../models/Consultation');

module.exports = {
    async createConsultation(req, res) {
        const { id_tutor, id_pet, id_doctor } = req.params; //busco os ids cadastrados (relacionamento)
        const { date, hour } = req.body;
        
        const tutor = await Tutor.findByPk(id_tutor);
        const pet = await Pet.findByPk(id_pet);
        const doctor = await Doctor.findByPk(id_doctor);

        //se não houver o tutor e não houver o pet cadastrados
        if (!tutor || !pet || !doctor) {
            return res.status(400).json({ error: "Tutor, Pet Or Doctor Not Found!" });
        }
        // if (!tutor) {
        //     return res.status(400).json({ error: "Tutor Not Found!" });
        // }
        // if (!pet) {
        //     return res.status(400).json({ error: "Pet Not Found!" });
        // }
        // if(!doctor){
        //     return res.status(400).json({ error: "Doctor Not Found!" });
        // }

        const consultation = await Consultation.create({
            date,
            hour,
            id_tutor,
            id_pet,
            id_doctor
        });

        return res.json(consultation);
    },

    async findAllConsultationsForDoctor(req, res) {
        const { id_tutor } = req.params; //busco o id do tutor
        const { id_pet } = req.params; //busco o id do tutor
        const { id_doctor } = req.params;

        //faço a busca pelo tutor e associo aos Consultations pertecentes a ele
        const tutor = await Tutor.findByPk(id_tutor, {
            include: { association: 'consultation_tutor' }
        });
        const pet = await Pet.findByPk(id_pet, {
            include: { association: 'consultation_pet' }
        });

        const doctor = await Doctor.findByPk(id_doctor, {
            include: { association: 'consultation_doctor' }
        });

        if(id_doctor){
            return res.json(doctor);
        }else if(id_pet){
            return res.json(pet);
        }else if(id_tutor){
            return res.json(tutor);
        }
    },

    async findAllConsultations(req, res) {
        const consultations = await Consultation.findAll();

        return res.json(consultations);
    },

    async findConsultationById(req, res) {
        if (req.params.id) {
            const consultation = await Consultation.findByPk(req.params.id);
            if (!consultation) {
                return res.json({ Error: "Consultation Not Found!" });
            }
            return res.json(consultation);
        }
    },

    async deletConsultation(req, res) {
        const { id } = req.params;

        //Faço a busca do Consultation na base de dados
        const Consultation = await Consultation.findByPk(id);

        //se encontrar o Consultation eu apago
        if(Consultation){
            await Consultation.destroy({
                where: { id }
            });
        }        

        //senão eu envio uma mensagem ao usuário
        if (!Consultation) {
            return res.json({ Error: "Consultation Not Found!" });
        }
        return res.json({ Sucesso: "Deleted Consultation!" })
    }

};