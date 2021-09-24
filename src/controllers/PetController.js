const Tutor = require('../models/Tutor');
const Pet = require('../models/Pet');

module.exports = {
    async createPet(req, res) {
        const { id_tutor } = req.params; //busco o id do tutor cadastrado. relacionamento
        const { name, birth } = req.body;

        const tutor = await Tutor.findByPk(id_tutor);

        //se não houver o tutor cadastrado
        if (!tutor) {
            return res.status(400).json({ error: "Tutor Not Found!" });
        }

        const pet = await Pet.create({
            name,
            birth,
            id_tutor        
        });

        return res.json(pet);
    },

    async findAllPets(req, res) {
        const { id_tutor } = req.params; //busco o id do tutor

        //faço a busca pelo tutor e associo aos pets pertecentes a ele
        const tutor = await Tutor.findByPk(id_tutor, {
            include: { association: 'pets' }
        });

        return res.json(tutor);
    },

    async findPetById(req, res) {
        if (req.params.id) {
            const pet = await Pet.findByPk(req.params.id);

            if (!pet) {
                return res.json({ Error: "Pet Not Found!" });
            }
            return res.json(pet);
        }
    },

    async deletPet(req, res) {
        const { id } = req.params;

        //Faço a busca do pet na base de dados
        const pet = await Pet.findByPk(id);

        //se encontrar o pet eu apago
        if(pet){
            await Pet.destroy({
                where: { id }
            });
        }        

        //senão eu envio uma mensagem ao usuário
        if (!pet) {
            return res.json({ Error: "Pet Not Found!" });
        }
        return res.json({ Sucesso: "Deleted Pet!" })
    }

};