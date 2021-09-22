const { Model, DataTypes } = require('sequelize');

class Tutor extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
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
    }
}
module.exports = Tutor;