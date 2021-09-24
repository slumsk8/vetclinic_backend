const { Model, DataTypes } = require('sequelize');

class Pet extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            birth: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    //Associação da tabela de Pets com a de Tutores. Um pet pertene a um tutor.
    static associate(models) {
        this.belongsTo(models.Tutor, {
            foreignKey: 'id_tutor',
            as: 'tutor'
        });

        this.hasMany(models.Consultation, {
            foreignKey: 'id_pet',
            as: 'consultation_pet'
        });
    }   

}
module.exports = Pet;