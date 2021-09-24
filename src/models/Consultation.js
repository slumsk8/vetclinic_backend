const { Model, DataTypes } = require('sequelize');

class Consultation extends Model {
    static init(sequelize) {
        super.init({
            date: DataTypes.STRING,
            hour: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    //associação com os veterinários    
    static associate(models) {
        this.belongsTo(models.Doctor, {
            foreignKey: 'id_doctor',
            as: 'doctor_consultation'
        });

        this.belongsTo(models.Pet, {
            foreignKey: 'id_pet',
            as: 'pet_consultation'
        });

        this.belongsTo(models.Tutor, {
            foreignKey: 'id_tutor',
            as: 'tutor_consultation'
        });
    }

}
module.exports = Consultation;