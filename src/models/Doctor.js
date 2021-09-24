const { Model, DataTypes } = require('sequelize');

class Doctor extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            crv: DataTypes.STRING,
            specialty: DataTypes.STRING,
        }, {
            sequelize
        })
    }

     //associação com as consultas
     static associate(models) {
        this.hasMany(models.Consultation, {
            foreignKey: 'id_doctor',
            as: 'consultation_doctor'
        });
    }
}
module.exports = Doctor;