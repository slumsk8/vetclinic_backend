const { Model, DataTypes } = require('sequelize');

class Tutor extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING           
        },{
            sequelize
        })
    }

    //Associação da tabela de Pets com a de Tutores. Um tutor tem muitos pets.
    static associate(models){
        this.hasMany(models.Pet, {
            foreignKey: 'id_tutor',
            as: 'pets' 
        });

        this.hasMany(models.Consultation, {
            foreignKey: 'id_tutor',
            as: 'consultation_tutor'
        });
    }    
}
module.exports = Tutor;