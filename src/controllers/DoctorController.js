const Doctor = require('../models/Doctor');

module.exports = {    
    async createDoctor(req, res){        
        const { name, crv, specialty } = req.body; //parametros enviados pelo body
        const doctor = await Doctor.create({ name, crv, specialty });

        return res.json(doctor);
    },

    async findAllDoctors(req, res){
        const doctor = await Doctor.findAll();

        return res.json(doctor);
    },

    async findDoctorById(req, res){
        if(req.params.id){
            const doctor = await Doctor.findByPk(req.params.id);

            //se não houver um Doctor
            if(!doctor){
                return res.json({ Error: "Doctor not found!" });
            }
            return res.json(doctor);
        }
    },

    async deletDoctor(req, res) {
        const { id } = req.params;

        //Faço a busca do Doctor na base de dados
        const doctor = await Doctor.findByPk(id);

        //se encontrar o Doctor eu apago
        if(doctor){
            await Doctor.destroy({
                where: { id }
            });
        }        

        //senão eu envio uma mensagem ao usuário
        if (!doctor) {
            return res.json({ Error: "Doctor not found!" });
        }
        return res.json({ Sucesso: "Deleted Doctor!" })
    }

};