const Tutor = require('../models/Tutor');

module.exports = {    
    async createTutor(req, res){        
        const { name, cpf } = req.body; //parametros enviados pelo body
        const tutor = await Tutor.create({ name, cpf });

        return res.json(tutor);
    },

    async findAllTutors(req, res){       
        const tutor = await Tutor.findAll();

        return res.json(tutor);
    },

    async findTutorById(req, res){
        if(req.params.id){
            const tutor = await Tutor.findByPk(req.params.id);

            //se não houver um tutor
            if(!tutor){
                return res.json({ Error: "Tutor não ecnontrado!" });
            }
            return res.json(tutor);
        }
    },

    async deletTutor(req, res) {
        const { id } = req.params;

        //Faço a busca do tutor na base de dados
        const tutor = await Tutor.findByPk(id);

        //se encontrar o tutor eu apago
        if(tutor){
            await Tutor.destroy({
                where: { id }
            });
        }        

        //senão eu envio uma mensagem ao usuário
        if (!tutor) {
            return res.json({ Error: "Tutor não encontrado!" });
        }
        return res.json({ Sucesso: "Tutor apagado!" })
    }

};