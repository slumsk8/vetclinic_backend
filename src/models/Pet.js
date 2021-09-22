const { Model, DataTypes } = require('sequelize');

class Pet extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            nascimento: DataTypes.DATE,                      
        },{
            sequelize
        })
    }

    //Associação da tabela de Pets com a de Tutores. Um pet pertene a um tutor.
    static associate(models){
        this.belongsTo(models.Tutor, {
            foreignKey: 'id_tutor',
            as: 'tutor'
        });
    }
}
module.exports = Pet;